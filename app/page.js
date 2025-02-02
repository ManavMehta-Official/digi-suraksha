

export default function Home() {
  return (
    <>
    <section className="flex flex-col justify-center items-center text-center py-20 ">
        <h2 className="text-5xl font-bold">Report Crime <br /> Anonymously & Securely</h2>
        <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-md items-center">
        Our secure and anonymous platform allows you to report incidents without fear of exposure.
        </p>
        <button className="mt-6 px-6 py-2.5 bg-red-500 rounded shadow-lg hover:shadow-2xl transition text-white">
            Report Crime
        </button>
    </section>

    <section id="how-it-works" className="pb-20 pt-10 bg-gray-200 dark:bg-gray-800 text-center rounded-lg">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div className="p-4 dark:bg-gray-700 bg-red-500 rounded-md shadow">
                <h3 className="text-xl text-white font-semibold mb-2">📩 Submit a Report</h3>
                <p className="text-gray-300">Fill out the crime details while keeping your identity hidden.</p>
            </div>
            <div className="p-4 dark:bg-gray-700 rounded-md shadow bg-red-500">
                <h3 className="text-xl text-white font-semibold mb-2">📎 Attach Evidence</h3>
                <p className="text-gray-300">Upload images, videos, or documents to support your report.</p>
            </div>
            <div className="p-4 dark:bg-gray-700 rounded-md shadow bg-red-500">
                <h3 className="text-xl text-white font-semibold mb-2">📢 Track Updates</h3>
                <p className="text-gray-300">Get notified about the progress of your crime reported.</p>
            </div>
        </div>
    </section>


    <section id="success-stories" className="py-20 text-center">
        <h2 className="text-3xl font-bold">Success Stories</h2>
        <p className="mt-4 text-gray-400">See how DigiSuraksha has helped citizens take action.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6 px-10">
            <div className="p-4 bg-gray-800 rounded shadow">
                <p>"I reported an online scam and got justice within weeks!"</p>
                <span className="text-gray-400">- Anonymous User</span>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow">
                <p>"This platform gave me the courage to report domestic abuse safely."</p>
                <span className="text-gray-400">- Survivor</span>
            </div>
        </div>
    </section>


    <section className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Law Enforcement Collaboration</h2>
        <p className="mt-4 text-gray-300">We ensure reports are securely forwarded to the relevant authorities.</p>
    </section>

    <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Resources & Safety Tips</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div className="p-4 bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Know Your Rights</h3>
                <p className="text-gray-300">Understand what legal protections you have as a whistleblower.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Stay Anonymous</h3>
                <p className="text-gray-300">Use VPNs or secure browsers when submitting sensitive reports.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Emergency Contacts</h3>
                <p className="text-gray-300">Find hotlines for urgent help in different regions.</p>
            </div>
        </div>
    </section>

    <section id="faq" className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 px-10">
            <details className="mb-4 bg-gray-700 p-4 rounded">
                <summary className="font-semibold">🔒 Is my identity truly anonymous?</summary>
                <p className="text-gray-300 mt-2">Yes, we do not store any personal data unless you choose to provide it.</p>
            </details>
            <details className="mb-4 bg-gray-700 p-4 rounded">
                <summary className="font-semibold">📌 Can I track my report?</summary>
                <p className="text-gray-300 mt-2">Yes, you'll receive a unique tracking ID after submission.</p>
            </details>
        </div>
    </section>

    <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-400 mt-2">Have questions? Reach out to our support team.</p>
        <a href="mailto:support@digisuraksha.com" className="mt-4 inline-block px-6 py-2 bg-green-500 rounded shadow">
            Email Support
        </a>
    </section>

    <footer className="bg-gray-900 p-6 text-center text-gray-400">
        &copy; 2025 DigiSuraksha. All Rights Reserved.
    </footer>
    </>
  )
}
