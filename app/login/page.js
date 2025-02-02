"use client";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Label from "../components/label";
import Link from "next/link";
import logo from "../../public/logo.svg"
import Image from "next/image"
export default function Page() {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

        try {
            // Make a POST request to your API using Axios
            const response = await axios.post(
                "https://crime-backend.onrender.com/api/auth/login",
                formData,
                { withCredentials: true } // ✅ This enables cookies
            );
            console.log("Response from API:", response.data);
            toast.success("Logged in successfully!");
            window.location.reload(); // Refresh the page after successful login
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to login.");
        }
    };

    return (
        <section className="md:max-w-md mx-auto mt-5 my-auto border border-gray-500 py-4 px-8 rounded-lg">
            <div className="flex mx-auto justify-center py-5">
                <Image src={logo} alt="logo" className="h-20 w-20" />
            </div>
            <h1 className="text-4xl font-semibold text-center">Login</h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="mt-8">
                    <Label>User ID</Label>
                    <Input
                        name="id"
                        type="text"
                        required
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 w-full py-2"
                    type="submit"
                >
                    Login
                </button>
            </form>

            <div className="flex flex-row space-x-2 justify-center mt-4">
                <p>Don't have an account?</p>
                <Link
                    href="/signup"
                    className="text-red-500 dark:text-red-400 hover:underline"
                >
                    Signup here
                </Link>
            </div>
        </section>
    );
}
