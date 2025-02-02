

export default function Metric({ metric, value, className }) {
    return (
        <div className={`${className} rounded-lg flex flex-col px-4 py-2`}>
            <h1 className="text-white">{metric}</h1>
            <h1 className="text-4xl text-white font-extrabold">{value}</h1>
        </div>
    )
}