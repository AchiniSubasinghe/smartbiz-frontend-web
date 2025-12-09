"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const adminLinks = [
  { name: "Businesses", path: "/admin/businesses" },
  { name: "Users", path: "/admin/users" },
  { name: "Subscriptions", path: "/admin/subscriptions" },
  { name: "Logs", path: "/admin/logs" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {adminLinks.map((item, index) => (
          <Link key={index} href={item.path}>
            <Card className="cursor-pointer hover:shadow-md transition">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage {item.name.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
