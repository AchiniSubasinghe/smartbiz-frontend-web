"use client";

import { useState } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function ForgotPasswordPage() {
    const router = useRouter();

    const [success, setSuccess] = useState(false);


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    async function handleChangePassword() {
        try {
            await api.post("/reset-password", {
                username: username,
                email: email,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            });

             setSuccess(true);
            setTimeout(() => {
                router.push("/auth/login");
            }, 1500);

        } catch (err: any) {
            console.log(err);
            const message =
                err.response?.data?.message ||
                "Failed to update password";
            toast.error(message);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h2 className="text-xl font-bold mb-4 text-white">SmartBiz</h2>
                    </CardTitle>
                    <CardDescription>Password Reset</CardDescription>
                    <CardAction>Enter your credentials</CardAction>
                </CardHeader>

                <CardContent>
                    <Input
                        type="text"
                        className="mb-4"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="text"
                        className="mb-4"
                        placeholder="Email"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        className="mb-4"
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <Input
                        type="password"
                        className="mb-4"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="flex justify-center">
                        <Button onClick={handleChangePassword}>Update Password</Button>
                    </div>
                </CardContent>

                <CardFooter className="flex justify-center">
                    <p className="text-sm">
                        Remember your password?{" "}
                        <Link href="/auth/login" className="text-blue-400">
                            Sign In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
