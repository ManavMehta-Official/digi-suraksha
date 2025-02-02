import { Input } from "@/components/ui/input"
import Label from "../components/label"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function Page() {
    return (
        <section className="md:max-w-md mx-auto mt-5 my-auto border border-gray-500 py-4 px-8 rounded-lg">
            <h1 className="text-4xl font-semibold">Sign Up</h1>
            <div className="text-sm mt-5 px-4 mb-8 space-y-0.5">
                    <span className="flex space-x-2 items-center">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <p>Your identity will remain completely confidential.</p>
                    </span>
                    <span className="flex space-x-2 items-center">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <p>Law Enforcement cannot see your Email ID</p>
                    </span>
                    <span className="flex space-x-2 items-center">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <p>You will recieve a User ID to maintain anonimity</p>
                    </span>
                </div>
            <form className="space-y-5">
                <div className="mt-8">
                    <Label>Email</Label>
                    <Input type="email" required />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input type="text" required />
                </div>
                    <button className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 w-full py-2" type="submit">Signup</button>
            </form>

            <div className="flex flex-row space-x-2 justify-center mt-4">
                <p>Already have an account?</p>
                <Link href="/login" className="text-red-500 dark:text-red-400 hover:underline">Login here</Link>

            </div>
        </section>
    )
}