import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import useServerDarkMode from "../../hooks/useServerDarkMode";
import Button from "./button";

export default function Header() {

    const theme = useServerDarkMode()

    return (
        <nav className="flex flex-row justify-between items-center mt-5 px-4">
            <Link href="/" className="font-semibold text-xl">DigiSuraksha</Link>
            <div className="space-x-4 flex items-center">
                <Link href="/admin">
                    <Button variant="ghost" size="sm">
                        Dashboard
                    </Button>
                </Link>
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
                <Link href="/login">
                    <Button variant="fill" size="sm">
                        Sign in
                    </Button>
                </Link>
                <DarkModeToggle defaultMode={theme} />
            </div>
        </nav>
    )
}