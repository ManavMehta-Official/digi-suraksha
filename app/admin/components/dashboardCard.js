import { CircleX, MapPin } from "lucide-react";
import Button from "@/app/components/button";
import { Flag } from "lucide-react";

export default function DashboardCard() {
    return(
        <div className="shadow border border-gray-700 dark:border-gray-600 dark:bg-gray-700 rounded-md p-4">
            <div className="flex space-x-2 items-center">
                <p className="bg-red-500 text-white w-fit rounded-md text-sm px-2">Fraud</p>
                <p>|</p>
                <p className="bg-yellow-500 text-white w-fit rounded-md text-sm px-2">Ongoing</p>
                <p>|</p>
                <div className="flex items-center"><MapPin className="text-red-500 h-4 w-4 items-center" />&nbsp; <p>Indore, MP</p></div>
                <p>|</p>
                <div className="flex items-center"><Flag className="text-red-500 text-xs h-4 y-4" /><span>1</span></div>

            </div>
            <p className="mt-5">
                <span className="font-semibold">Summary: </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-2">
                <span className="font-semibold">Description: </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4 flex items-center space-x-2">
                <Button variant="fill" size="sm">
                    <div className="flex items-center space-x-1">
                        <CircleX className="h-5 w-5" />
                        <span>Close Report</span>
                    </div>
                </Button>
            </div>
        </div>
    )
}