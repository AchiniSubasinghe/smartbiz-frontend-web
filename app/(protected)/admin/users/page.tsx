"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {Card,CardHeader,CardTitle,CardContent,} from "@/components/ui/card";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem,} from "@/components/ui/select";

type User = {id: number;fullname: string;email: string;businessId: number;role: "OWNER" | "STAFF";status: "active" | "inactive";};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([
        {
      id: 1,
      fullname: "Achini",
      email: "admin@store.com",
      businessId: 200,
      role: "OWNER",
      status: "active",
    },
    ]);

    const [formUser, setFormUser] = useState<Partial<User>>({});
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    function handleDeleteUser(id: number) {
        setUsers(users.filter((u) => u.id !== id));
    }

    function openEdit(user: User) {
        setEditingId(user.id);
        setFormUser(user);
        setIsEditOpen(true);
    }

    function resetForm() {
        setEditingId(null);
        setFormUser({});
    }

    function handleUpdateUser() {
        if (editingId === null) return;
        setUsers((prev) =>
            prev.map((u) =>
                u.id === editingId
                    ? {
                        ...u,
                        fullname: formUser.fullname || "",
                        email: formUser.email || "",
                        businessId: Number(formUser.businessId),
                        role: formUser.role || "OWNER",
                        status: formUser.status || "active",
                    }
                    : u
            )
        );
        setIsEditOpen(false);
        resetForm();
    }

    return (
        <div className="p-6">
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>View Business Owners</CardTitle>
                    <Link href="/admin/businesses/create">
                        <Button>+ Add Owner</Button>
                    </Link>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Business ID</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.fullname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.businessId}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.status}</TableCell>

                                    <TableCell className="text-right space-x-2">
                                        <Dialog
                                            open={isEditOpen && editingId === user.id}
                                            onOpenChange={setIsEditOpen}
                                        >
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => openEdit(user)}
                                                >
                                                    Edit
                                                </Button>
                                            </DialogTrigger>

                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edit User</DialogTitle>
                                                </DialogHeader>

                                                <div className="space-y-3">
                                                    <Input
                                                        placeholder="Full name"
                                                        value={formUser.fullname || ""}
                                                        onChange={(e) =>
                                                            setFormUser({
                                                                ...formUser,
                                                                fullname: e.target.value,
                                                            })
                                                        }
                                                    />

                                                    <Input
                                                        placeholder="Email"
                                                        value={formUser.email || ""}
                                                        onChange={(e) =>
                                                            setFormUser({
                                                                ...formUser,
                                                                email: e.target.value,
                                                            })
                                                        }
                                                    />

                                                    <Input
                                                        placeholder="Business ID"
                                                        type="number"
                                                        value={
                                                            formUser.businessId ? String(formUser.businessId) : ""
                                                        }
                                                        onChange={(e) =>
                                                            setFormUser({
                                                                ...formUser,
                                                                businessId: Number(e.target.value),
                                                            })
                                                        }
                                                    />

                                                
                                                    <Select
                                                        value={formUser.status || "active"}
                                                        onValueChange={(val) =>
                                                            setFormUser({
                                                                ...formUser,
                                                                status: val as User["status"],
                                                            })
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="active">Active</SelectItem>
                                                            <SelectItem value="inactive">Inactive</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Button className="w-full" onClick={handleUpdateUser}>
                                                        Update
                                                    </Button>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                        
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {users.length === 0 && (
                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        className="text-center text-muted-foreground"
                                    >
                                        No users found
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
