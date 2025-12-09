"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type AdminLog = {
  id: number;
  adminId: number;
  action: string;
  description: string;
  createdAt: string;
};

export default function AdminLogsPage() {
  const [logs] = useState<AdminLog[]>([
    {
      id: 1,
      adminId: 101,
      action: "CREATE_BUSINESS",
      description: "Created Smart Store (ID: 200)",
      createdAt: "2025-01-15 10:30 AM",
    },
    {
      id: 2,
      adminId: 102,
      action: "UPDATE_STATUS",
      description: "Changed status of Business 200 to active",
      createdAt: "2025-01-16 09:15 AM",
    },
    {
      id: 3,
      adminId: 101,
      action: "DELETE_BUSINESS",
      description: "Deleted Business 201",
      createdAt: "2025-01-18 02:45 PM",
    },
  ]);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Admin Activity Logs</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Log ID</TableHead>
                <TableHead>Admin ID</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date & Time</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.id}</TableCell>
                  <TableCell>{log.adminId}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell>{log.createdAt}</TableCell>
                </TableRow>
              ))}

              {logs.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground"
                  >
                    No logs found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
