"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import CrimeCard from "../components/crimeCard"
import Seperator from "../components/seperator"

export default function Page() {
  const [reports, setReports] = useState([])  // State to store the reports
  const [loading, setLoading] = useState(true)  // State to handle loading
  const [error, setError] = useState("")  // State to handle error messages

  useEffect(() => {
    // Fetch the crime reports from the backend
    const fetchReports = async () => {
      try {
        const response = await axios.get("https://crime-backend.onrender.com/api/reports/get-all-reports", {withCredentials: true})
        if (response.data && response.data.data) {
          setReports(response.data.data)  // Set reports data into state
        } else {
          setError("No reports found")
        }
      } catch (err) {
        setError("Error fetching reports")
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  if (loading) {
    return <div>Loading...</div>  // Show loading state while data is being fetched
  }

  if (error) {
    return <div>{error}</div>  // Show error message if there's an error
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">Crimes Reported</h1>
      <Seperator className="mb-8" />
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
            markedFalseCount = {report.markedFalseAmount}
            markedTrueCount = {report.markedTrueAmount}
            reportId={report._id}
            isCaseClosed = {report.isCaseClosed}
          />
        ))}
      </div>
    </section>
  )
}
