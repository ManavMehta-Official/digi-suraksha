"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import useServerDarkMode from "../../hooks/useServerDarkMode";
import Button from "./button";
import axios from "axios";
import Logo from "../../public/logo.svg"
import Image from "next/image";

export default function Header() {
    const theme = useServerDarkMode();
    const [user, setUser] = useState(null); // Store the authenticated user

    // Fetch the authentication status on mount
    useEffect(() => {
        const fetchAuthStatus = async () => {
            try {
                const response = await axios.get("https://crime-backend.onrender.com/api/auth/check", {
                    withCredentials: true, // Include cookies
                });
                setUser(response.data); // Set the user if authenticated
            } catch (error) {
                console.error("Error checking authentication status:", error.message);
                setUser(null); // Set user to null if not authenticated
            }
        };

        fetchAuthStatus();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post("https://crime-backend.onrender.com/api/auth/logout", {}, { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <nav className="flex flex-row justify-between items-center mt-5 px-4">
            <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" className="h-8 w-7" />
            <Link href="/" className="font-semibold text-xl">DigiSuraksha</Link>
            </div>
            <div className="space-x-4 flex items-center">
                <Link href="/crimes">
                    <Button variant="ghost" size="sm">
                        Crimes
                    </Button>
                </Link>
                <Link href="/report">
                    <Button variant="ghost" size="sm">
                        Report
                    </Button>
                </Link>
                {user ? (
                    <Button variant="fill" size="sm" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Link href="/login">
                        <Button variant="fill" size="sm">
                            Sign in
                        </Button>
                    </Link>
                )}
                <DarkModeToggle defaultMode={theme} />
            </div>
        </nav>
    );
}
