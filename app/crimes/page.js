import CrimeCard from "../components/crimeCard"

export const metadata = {
    title: "Crimes"
}

export default function Page() {  

    return (
        <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold">Crimes Reported</h1>
            <div className="grid grid-cols-2 space-x-2 space-y-2">
                <CrimeCard />
                <CrimeCard />
            </div>
        </section>
    )
}