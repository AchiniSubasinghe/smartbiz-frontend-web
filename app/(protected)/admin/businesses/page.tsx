"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Business = {
  businessId: number;
  businessName: string;
  address: string;
  subscriptionType: string;
  createdAt: string;
  owners: string[];
  status: "active" | "inactive";
};

export default function BusinessesPage() {
  const [businesses] = useState<Business[]>([
    {
      businessId: 200,
      businessName: "Smart Store",
      address: "Colombo, Sri Lanka",
      subscriptionType: "Premium",
      createdAt: "2025-01-10",
      owners: ["OWNER-001", "OWNER-005"],
      status: "active",
    },
    {
      businessId: 201,
      businessName: "Tech Hub",
      address: "Galle, Sri Lanka",
      subscriptionType: "Free",
      createdAt: "2025-02-05",
      owners: ["OWNER-003"],
      status: "inactive",
    },
  ]);

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>All Businesses</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Owner IDs</TableHead>
                <TableHead>Status</TableHead> {/* NEW */}
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {businesses.map((b) => (
                <TableRow key={b.businessId}>
                  <TableCell>{b.businessId}</TableCell>
                  <TableCell>{b.businessName}</TableCell>
                  <TableCell>{b.address}</TableCell>
                  <TableCell>{b.subscriptionType}</TableCell>
                  <TableCell>{b.owners.join(", ")}</TableCell>

                  {/* NEW STATUS DISPLAY */}
                  <TableCell>
                    {b.status}
                  </TableCell>

                  <TableCell>{b.createdAt}</TableCell>
                </TableRow>
              ))}

              {businesses.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center text-muted-foreground"
                  >
                    No businesses found
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
