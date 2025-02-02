import { useState } from "react";
import { Circle, Flag, MapPin } from "lucide-react";
import Button from "./button";
import { Modal } from "./modal"; // Import the Modal component

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsModalOpen(true); // Open the modal
  const closeModal = () => setIsModalOpen(false); // Close the modal

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
      <p className="text-sm mt-2">
        {summary}
      </p>
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
            <Flag className="text-red-500 text-xs h-4 y-4" />
            <span>{markedFalseCount}</span>
          </div>
        </Button>
      </div>

      {/* Render the modal with the full crime details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} crimeDetails={crimeDetails} />
    </div>
  );
}
