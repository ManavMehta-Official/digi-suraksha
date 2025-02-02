import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { Circle, Flag, MapPin } from "lucide-react";
import Button from "./button";
import { Modal } from "./modal";
import Metrics from "../admin/components/metric.js"; // Import the Metrics component

export default function CrimeCard({
  crimeCategory,
  summary,
  location,
  dateOfCrime,
  description,
  media,
  markedFalseCount,
  reportId,
  markedTrueCount,
  isCaseClosed
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin

  useEffect(() => {
    // Fetch user data using Axios on page load
    axios.get("https://crime-backend.onrender.com/api/auth/check", { withCredentials: true })
      .then((response) => {
        if (response.data.isAdmin) {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const crimeDetails = {
    crimeCategory,
    summary,
    location,
    dateOfCrime,
    description,
    media,
    markedFalseCount,
    markedTrueCount
  };

  return (
    <>
      {/* Render Metrics at the top if the user is an admin */}


      <div className="shadow border border-gray-500 rounded-md p-4">
        <div className="flex space-x-2 items-center">
          <p className="bg-red-500 text-white w-fit rounded-md text-sm px-2">
            {crimeCategory}
          </p>
          <p>|</p>
          <div className="flex items-center">
            <MapPin className="text-red-500 h-4 w-4 items-center" />
            &nbsp; <p>{location}</p>
          </div>
        </div>
        <p className="text-sm mt-2">{summary}</p>
        <div className="mt-4 flex items-center space-x-2">
          <Button size="sm" onClick={openModal}>Read More</Button>
          <Button variant="outline" size="sm">
            <div className="flex items-center space-x-1">
              <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
              {isCaseClosed ? <span>Case has been closed</span> : <span>Ongoing</span>}
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="flex items-center">
              <Flag className="text-red-500 text-xs h-4 w-4" />
              <span>{markedFalseCount}</span>
            </div>
          </Button>

          {/* Show "Mark Case Closed" button only if the user is an admin */}
          {isAdmin && (
            <Button variant="destructive" size="sm">
              Mark Case Closed
            </Button>
          )}
        </div>

        {/* Render the modal with the full crime details */}
        <Modal isOpen={isModalOpen} onClose={closeModal} crimeDetails={crimeDetails} />
      </div>
    </>
  );
}
