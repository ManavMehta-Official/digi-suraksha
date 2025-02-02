import React from "react";
import {Flag, CheckCheck, Check} from "lucide-react"

export function Modal({ isOpen, onClose, crimeDetails }) {
    if (!isOpen) return null; // Do not render the modal if it's not open.

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-3xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-semibold">{crimeDetails.crimeCategory}</h2>
                <p className="mt-2 text-sm text-gray-600">{crimeDetails.location}</p>
                <p className="mt-4">{crimeDetails.description}</p>
                {crimeDetails.media && (
                    <img src={crimeDetails.media} alt="Crime related media" className="mt-4 w-full h-auto" />
                )}
                <p className="mt-2">Date of Crime: {new Date(crimeDetails.dateOfCrime).toLocaleDateString()}</p>
                <p className="mt-2">{crimeDetails.summary}</p>
                
                {/* Display the flag counts in one line */}
                <div className="mt-4 flex justify-start items-center space-x-4">
                    <p className="flex items-center">
                        <Flag className="text-red-500 text-xs h-4 w-4 mr-1" />
                        {crimeDetails.markedTrueCount}
                    </p>
                    <p className="flex items-center">
                        <CheckCheck className="text-green-500 text-xs h-4 w-4 mr-1" />
                        {crimeDetails.markedFalseCount}
                    </p>
                </div>
            </div>
        </div>
    );
}

