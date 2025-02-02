"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Label from "../components/label";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import axios from "axios";

export default function Page() {
  // State to hold email, password, loading, error, and user ID
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(""); // State to store the user _id

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = { email, password };

    // Post request to the backend
    try {
      setLoading(true);
      const response = await axios.post(
        "https://crime-backend.onrender.com/api/auth/signup",
        formData
      );
      console.log("Signup successful:", response.data);
      // Set userId state with the received _id
      setUserId(response.data._id);
      // Optionally, refresh the page after successful signup (if needed)
      // window.location.reload(); 
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <p>You will receive a User ID to maintain anonymity</p>
        </span>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="mt-8">
          <Label>Email</Label>
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 w-full py-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Signup"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Display the user _id if signup is successful */}
      {userId && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
          <p>Your User ID: {userId}</p>
        </div>
      )}

      <div className="flex flex-row space-x-2 justify-center mt-4">
        <p>Already have an account?</p>
        <Link href="/login" className="text-red-500 dark:text-red-400 hover:underline">
          Login here
        </Link>
      </div>
    </section>
  );
}
