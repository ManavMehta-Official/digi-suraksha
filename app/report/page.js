import Image from "next/image";
import teamChat from "../../public/teamChat.svg";
import ReportForm from "./component/reportForm";

export const metadata = {
    title: "Report"
}
  

export default function Page() {
    return (
        <section className="flex flex-col md:flex-row gap-5 md:mt-8 items-center">
            <div className="w-0 md:w-[40%] px-5 py-2">
                <Image src={teamChat} alt="Anonymous Reporting" className="w-full h-fit" />
            </div>
            <div className="w-full md:w-[60%]">
                <ReportForm />
            </div>
        </section>
    )
}