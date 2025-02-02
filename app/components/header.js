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
                <Link href="/crime">
                    <Button variant="ghost" size="sm">
                        Crime
                    </Button>
                </Link>
                <Link href="/report">
                    <Button variant="fill" size="sm">
                        Report
                    </Button>
                </Link>
                <DarkModeToggle defaultMode={theme} />
            </div>
        </nav>
    )
}