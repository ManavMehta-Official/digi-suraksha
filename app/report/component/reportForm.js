import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Link, Lock, MapPin } from "lucide-react";
import { categories } from "@/lib/consts";
import Label from "@/app/components/label";


export default function ReportForm() {
    return (
        <form>
            <h1 className="text-4xl font-semibold mb-2">Report Crime</h1>
                <p className="mb-5 w-3/4 text-sm dark:text-gray-400 text-slate-500">
                Your safety matters. Submit a crime report securely and anonymously. Provide as much detail as possible to help authorities take action while ensuring your privacy is protected.
                </p>
                <div className="text-sm space-y-2 mb-8">
                    <span className="flex space-x-1 items-center">
                        <Lock className="h-4 w-4 dark:text-yellow-500 text-yellow-600" />
                        <p>Your identity will remain completely confidential.</p>
                    </span>
                    <span className="flex space-x-1 items-center">
                        <MapPin className="h-4 w-4 dark:text-red-500 text-red-700" />
                        <p>Accurate details help ensure a faster response.</p>
                    </span>
                    <span className="flex space-x-1 items-center">
                        <Link className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                        <p>Attach images, videos, or documents as evidence.</p>
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4">
                    <div>
                        <Label>Category <span className="text-red-500">*</span></Label>
                        <Select required>
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
                        <Input required type="text" placeholder="Summary" />
                    </div>

                    <div>
                        <Label>Location <span className="text-red-500">*</span></Label>
                        <Input required type="text" placeholder="Location" />    
                    </div>

                    <div>
                        <Label>Location Radius</Label>
                        <Input type="number" placeholder="Location Radius (km)" />
                    </div>

                    <div>
                        <Label>Date <span className="text-red-500">*</span></Label>
                        <Input required type="text" placeholder="YYYY-MM-DD" />
                    </div>

                    <div className="grid w-full max-w-sm items-center">
                        <Label htmlFor="picture">Picture / Video / Documents</Label>
                        <Input id="picture" type="file" />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <Label>Description <span className="text-red-500">*</span></Label>
                        <Textarea required placeholder="Enter the description of the crime commited" />
                    </div>
                    
                </div>
                <div className="flex justify-center mt-8">
                    <button type="submit" className="rounded-md bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 dark:bg-red-600 disabled:opacity-25 px-12 py-1.5">
                        Submit
                    </button>
                </div>
        </form>
    )
}