import React from "react";
import Seperator from "../components/seperator";
import DashboardCard from "./components/dashboardCard";
import Metric from "./components/metric";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
    { name: "Theft", value: 30 },
    { name: "Assault", value: 25 },
    { name: "Fraud", value: 20 },
    { name: "Vandalism", value: 15 },
    { name: "Cybercrime", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

export default function Page() {
    return (
        <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <Seperator className="mb-8" />
            <section className="grid grid-cols-4 gap-5">
                <Metric className="bg-gray-700" metric="Total Reports" value={1576} />
                <Metric className="bg-green-700" metric="Cases Completed" value={1576} />
                <Metric className="bg-red-700" metric="Cases Pending" value={521} />
                <Metric className="bg-yellow-600" metric="Ongoing Cases" value={1576} />
            </section>
            <section className="mt-8">
                <DashboardCard />
            </section>
        </section>
    )
}