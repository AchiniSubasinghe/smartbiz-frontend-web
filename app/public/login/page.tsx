"use client";
import { useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle><h1>Smartbiz</h1></CardTitle>
                    <CardDescription>Smart inventory & sales management system</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        type="text"
                        placeholder="Username"
                        className="mb-3"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                          className="mb-3"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-center">
                        <Button
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>

                </CardContent>

            </Card>
        </div>
    )
}
