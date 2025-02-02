"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CrimeCard from "../components/crimeCard";
import Seperator from "../components/seperator";
import Metric from "../admin/components/metric.js"; // Import your Metrics component
import DashboardCard from "../admin/components/dashboardCard.js"; // Import your Metrics component

export default function Page() {
    const [reports, setReports] = useState([]); // State to store the reports
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(""); // State to handle error messages
    const [isAdmin, setIsAdmin] = useState(false); // State to store admin status

    useEffect(() => {
        // Check if the user is an admin
        const checkAdminStatus = async () => {
            try {
                const response = await axios.get("https://crime-backend.onrender.com/api/auth/check", {
                    withCredentials: true,
                });
                if (response.data && response.data.isAdmin) {
                    setIsAdmin(true); // Set admin status to true
                }
            } catch (err) {
                console.error("Error checking admin status:", err);
            }
        };

        // Fetch the crime reports from the backend
        const fetchReports = async () => {
            try {
                const response = await axios.get(
                    "https://crime-backend.onrender.com/api/reports/get-all-reports",
                    { withCredentials: true }
                );
                if (response.data && response.data.data) {
                    setReports(response.data.data); // Set reports data into state
                } else {
                    setError("No reports found");
                }
            } catch (err) {
                setError("Error fetching reports");
            } finally {
                setLoading(false);
            }
        };

        // Call both functions
        checkAdminStatus();
        fetchReports();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    if (error) {
        return <div>{error}</div>; // Show error message if there's an error
    }

    return (
        <section className="max-w-4xl mx-auto">
            {isAdmin &&
                <section className="max-w-4xl mx-auto mb-6">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <Seperator className="mb-8" />
                    <section className="grid grid-cols-4 gap-5">
                        <Metric className="bg-gray-700" metric="Total Reports" value={1576} />
                        <Metric className="bg-green-700" metric="Cases Completed" value={1576} />
                        <Metric className="bg-red-700" metric="Cases Pending" value={521} />
                        <Metric className="bg-yellow-600" metric="Ongoing Cases" value={1576} />
                    </section>
                </section>}
            <h1 className="text-3xl font-semibold">Crimes Reported</h1>
            <Seperator className="mb-8" />

            {/* Render Metrics component if the user is an admin */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                {reports.map((report) => (
                    <CrimeCard
                        key={report._id}
                        crimeCategory={report.crimeCategory}
                        summary={report.summary}
                        location={report.location}
                        dateOfCrime={new Date(report.dateOfCrime).toLocaleDateString()}
                        description={report.description}
                        media={report.media}
                        markedFalseCount={report.markedFalseAmount}
                        markedTrueCount={report.markedTrueAmount}
                        reportId={report._id}
                        isCaseClosed={report.isCaseClosed}
                        isAdmin={isAdmin} // Pass isAdmin prop to CrimeCard
                    />
                ))}
            </div>
        </section>
    );
}