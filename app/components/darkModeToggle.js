"use client";

import useDarkMode from "../../hooks/useDarkMode";
import Button from "./button";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ defaultMode = 'dark' }) {

    const {theme, toggleTheme} = useDarkMode(defaultMode);

    return (
        <Button variant="ghost" onClick={toggleTheme}>
            { theme == 'light' && <Moon className="w-4 h-4" /> }
            { theme == 'dark' && <Sun className="w-4 h-4" /> }
        </Button>
    )
}