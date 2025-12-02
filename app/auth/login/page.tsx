    "use client";
    // used to store form values
    import { useState } from "react";
    import { api } from "@/lib/axios";
    // riderect users after login
    import { useRouter } from "next/navigation";
    import { toast } from "sonner";
    import Link from "next/link";

    export default function LoginPage(){
    const router =useRouter();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    async function handleLogin(){
    try{
        const res =await api.post("/signIn",{username,password});
        const token = res.data.data.cookie.value.replace("jwt=","");
        localStorage.setItem("token",token);

        const role = res.data.data.userResponseDto.role;
        if (role==="ADMIN") router.push("/dashboard/admin");
        else if(role ==="EDITOR") router.push("/dashboard/editor");
        else router.push("/dashboard");

    }catch(err:any){
        const message =err.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
    }

    return(
        <div className="flex min-h-screen items-center justify-center">
            <div className="p-6 bg-black rounded shadow w-80">
                <h2 className="text-xl font-bold mb-4 text-white">Welcome Back!</h2>
                 <p className="text-white text-sm mb-4">Do not have an account?{" "}
                     <Link href="/auth/register" className="text-blue-400 underline">
                        Sign up
                    </Link>
                </p>
                <input
                type="text"
                placeholder="Username"
                className="border p-2 w-full mb-3 text-white"
                onChange={(e) => setUsername(e.target.value)}
                />

                <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full mb-3 text-white"
                onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                onClick={handleLogin}
                className="bg-blue-100 text-black p-2 rounded w-full"
                >
                    Login
                </button>
            
               

            </div>
        </div>
    )
    }
