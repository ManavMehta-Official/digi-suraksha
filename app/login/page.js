import { Input } from "@/components/ui/input"
import Label from "../components/label"
import Link from "next/link"

export const metadata = {
    title: "Login"
}

export default function Page() {
    return (
        <section className="md:max-w-md mx-auto mt-5 my-auto border border-gray-500 py-4 px-8 rounded-lg">
            <h1 className="text-4xl font-semibold">Login</h1>
            <form className="space-y-5">
                <div className="mt-8">
                    <Label>User ID</Label>
                    <Input type="text" required />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input type="text" required />
                </div>
                    <button className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 w-full py-2" type="submit">Login</button>
            </form>

            <div className="flex flex-row space-x-2 justify-center mt-4">
                <p>Don't have an account?</p>
                <Link href="/signup" className="text-red-500 dark:text-red-400 hover:underline">Signup here</Link>

            </div>
        </section>
    )
}