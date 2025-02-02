import CrimeCard from "../components/crimeCard"
import Seperator from "../components/seperator"

export const metadata = {
    title: "Crimes"
}

export default function Page() {  

    return (
        <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold">Crimes Reported</h1>
            <Seperator className="mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                <CrimeCard />
                <CrimeCard />
                <CrimeCard />
                <CrimeCard />
            </div>
        </section>
    )
}