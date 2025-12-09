"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Businesses", href: "/admin/businesses" },
        { name: "Users", href: "/admin/users" },
        { name: "Subscriptions", href: "/admin/subscriptions" },
        { name: "Logs", href: "/admin/logs" },
    ];

    function handleLogout() {

    }

    return (
        <div className="min-h-screen flex flex-col">

            <nav className="h-14 border-b flex items-center px-4 justify-between bg-background">

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button aria-label="Open Menu">
                            <Menu className="w-6 h-6" />
                        </button>
                    </SheetTrigger>


                    <SheetContent side="left" className="w-64">
                        <div className="py-4 space-y-2">
                            <h2 className="text-lg font-semibold px-2">Admin Menu</h2>

                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="px-2 py-1 rounded hover:bg-accent"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

                <div className="font-semibold">SmartBiz Admin</div>

                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Admin</span>


                    <Button
                        onClick={handleLogout} >
                        Logout
                    </Button>
                </div>
            </nav>

            <div className="flex flex-1">
                <div className="w-full p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
