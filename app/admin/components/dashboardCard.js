import { MapPin } from "lucide-react";
import Button from "@/app/components/button";
import { Flag } from "lucide-react";

export default function DashboardCard() {
    return(
        <div className="shadow border border-gray-500 rounded-md p-4">
            <div className="flex space-x-2 items-center">
                <p className="bg-red-500 text-white w-fit rounded-md text-sm px-2">Fraud</p>
                <p>|</p>
                <p className="bg-yellow-500 text-white w-fit rounded-md text-sm px-2">Fraud</p>
                <p>|</p>
                <div className="flex items-center"><MapPin className="text-red-500 h-4 w-4 items-center" />&nbsp; <p>Indore, MP</p></div>
                <p>|</p>
                <div className="flex items-center"><Flag className="text-red-500 text-xs h-4 y-4" /><span>1</span></div>

            </div>
            <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4 flex items-center space-x-2">
                <Button size="sm">Read More</Button>
                <Button variant="outline" size="sm">
                    <div className="flex items-center space-x-1">
                        <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
                        <span>Completed</span>
                    </div>
                </Button>
                <Button variant="ghost" size="sm">
                    <div className="flex items-center">
                        <Flag className="text-red-500 text-xs h-4 y-4" />
                        <span>1</span>
                    </div>
                </Button>
            </div>
        </div>
    )
}