"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/consts";
import Label from "@/app/components/label";
import { toast } from "react-hot-toast";  // Assuming you're using react-hot-toast
import axios from "axios";  // Import Axios

export default function ReportForm() {
    const [imagePreview, setImagePreview] = useState(null);
    const [media, setMedia] = useState(null); // Stores Base64 image

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file.type.startsWith("image/")) {
            toast.error("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setMedia(reader.result); // Store Base64 image in state
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            crimeCategory: e.target.category.value,
            summary: e.target.summary.value,
            description: e.target.description.value,
            location: e.target.location.value,
            radius: parseFloat(e.target.radius.value) || 0,
            dateOfCrime: e.target.dateOfCrime.value,
            media: media,  // Ensure media is included
        };

        console.log("Submitting Form Data:", formData);

        try {
            // Make a POST request to your API using Axios
            const response = await axios.post("https://crime-backend.onrender.com/api/reports/post-report", formData, {withCredentials: true});
            console.log("Response from API:", response.data);
            toast.success("Crime report submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit the report.");
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold mb-2">Report Crime</h1>
            <p className="mb-5 w-3/4 text-sm dark:text-gray-400 text-slate-500">
                Your safety matters. Submit a crime report securely and anonymously. Provide as much detail as possible to help authorities take action while ensuring your privacy is protected.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4">
                <div>
                    <Label>Category <span className="text-red-500">*</span></Label>
                    <Select required name="category">
                        <SelectTrigger>
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(category =>
                                <SelectItem value={category} key={category}>{category}</SelectItem>
                            )}
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label>Summary <span className="text-red-500">*</span></Label>
                    <Input required name="summary" type="text" placeholder="Summary" />
                </div>

                <div>
                    <Label>Location <span className="text-red-500">*</span></Label>
                    <Input required name="location" type="text" placeholder="Location" />
                </div>

                <div>
                    <Label>Location Radius</Label>
                    <Input name="radius" type="number" placeholder="Location Radius (km)" />
                </div>

                <div>
                    <Label>Date <span className="text-red-500">*</span></Label>
                    <Input required name="dateOfCrime" type="text" placeholder="YYYY-MM-DD" />
                </div>

                <div className="grid w-full max-w-sm items-center">
                    <Label htmlFor="picture">Picture / Video / Documents</Label>
                    <Input id="picture" type="file" accept="image/*" onChange={handleImageChange} />
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />
                    )}
                </div>

                <div className="col-span-1 md:col-span-2">
                    <Label>Description <span className="text-red-500">*</span></Label>
                    <Textarea required name="description" placeholder="Enter the description of the crime committed" />
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button type="submit" className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 px-12 py-1.5">
                    Submit
                </button>
            </div>
        </form>
    );
}
