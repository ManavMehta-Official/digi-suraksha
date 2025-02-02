import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportPage() {
    const router = useRouter();
    const { reportId } = router.query;
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (reportId) {
            const fetchReport = async () => {
                try {
                    const response = await axios.get(`https://crime-backend.onrender.com/api/reports/${reportId}`);
                    setReport(response.data);
                } catch (err) {
                    console.error("Failed to fetch report:", err);
                    setError("Failed to fetch report. Please try again.");
                } finally {
                    setLoading(false);
                }
            };

            fetchReport();
        }
    }, [reportId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{report?.crimeCategory}</h1>
            <p className="text-sm text-gray-600">{report?.location}</p>
            <p className="mt-4">{report?.description}</p>
            <p className="text-sm text-gray-500 mt-2">Date of Crime: {new Date(report?.dateOfCrime).toLocaleDateString()}</p>
            {/* Add more details as needed */}
        </div>
    );
}