"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddUser() {
    const router = useRouter();
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [businessid, setBusinessId] = useState("");
    const [status, setStatus] = useState("")

    async function handleRegister() {

    }

    return (
        <div>
            <h1 className="text-xl mt-2 font-bold ">Add Business owners</h1>
            <div className=" min-h-screen items-center">

                <Card className="mt-10  w-full max-w-lg">
                    <CardHeader>
                        <CardTitle><h1>Smartbiz</h1></CardTitle>
                        <CardDescription>Smart inventory & sales management system</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type="text"
                            placeholder="Full name"
                            className="mb-3"
                            onChange={(e) => setFullName(e.target.value)}
                        />

                        <Input
                            type="text"
                            placeholder="Email"
                            className="mb-3"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            type="number"
                            placeholder="Business Id"
                            className="mb-3"
                            onChange={(e) => setBusinessId(e.target.value)}
                        />


                        <Input
                            type="password"
                            placeholder="Password"
                            className="mb-3"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Select onValueChange={(value) => setStatus(value)}>
                            <SelectTrigger className="w-[180px] mb-4">
                                <SelectValue placeholder="Select the status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">In-Active</SelectItem>
                            </SelectContent>
                        </Select>


                        <div className="flex justify-center">
                            <Button
                                onClick={handleRegister}
                            >
                                Register
                            </Button>
                        </div>

                    </CardContent>

                </Card>
            </div>
        </div>
    )
}
