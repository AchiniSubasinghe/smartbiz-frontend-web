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

type Subscription = {
  subscriptionId: number;
  subscriptionName: string;
  price: number;
  duration: string; 
  status: "active" | "inactive";
  createdAt: string;
};

export default function AdminSubscriptionsPage() {
  const [subscriptions] = useState<Subscription[]>([
    {
      subscriptionId: 1,
      subscriptionName: "Free",
      price: 0,
      duration: "Monthly",
      status: "active",
      createdAt: "2025-01-10",
    },
    {
      subscriptionId: 2,
      subscriptionName: "Basic",
      price: 2500,
      duration: "Monthly",
      status: "inactive",
      createdAt: "2025-02-14",
    },
    {
      subscriptionId: 3,
      subscriptionName: "Premium",
      price: 5000,
      duration: "Monthly",
      status: "active",
      createdAt: "2025-03-20",
    },
  ]);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Plan Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {subscriptions.map((s) => (
                <TableRow key={s.subscriptionId}>
                  <TableCell>{s.subscriptionId}</TableCell>
                  <TableCell>{s.subscriptionName}</TableCell>
                  <TableCell>Rs. {s.price}</TableCell>
                  <TableCell>{s.duration}</TableCell>

                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        s.status === "active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {s.status}
                    </span>
                  </TableCell>

                  <TableCell>{s.createdAt}</TableCell>
                </TableRow>
              ))}

              {subscriptions.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground"
                  >
                    No subscriptions found
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
