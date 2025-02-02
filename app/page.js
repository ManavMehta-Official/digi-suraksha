

export default function Home() {
  return (
    <>
    <section class="text-center py-20">
        <h2 class="text-4xl font-bold">Report Crime Anonymously & Securely</h2>
        <p class="mt-4 text-gray-400">Empower citizens to report crimes without fear.</p>
        <button class="mt-6 px-6 py-2 bg-red-500 rounded shadow-lg hover:shadow-2xl transition">
            Report Now
        </button>
    </section>

    <section id="how-it-works" className="py-20 bg-gray-800 text-center">
        <h2 class="text-4xl font-bold">How It Works</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">📩 1. Submit a Report</h3>
                <p class="text-gray-300">Fill out the crime details while keeping your identity hidden.</p>
            </div>
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">📎 2. Attach Evidence</h3>
                <p class="text-gray-300">Upload images, videos, or documents to support your report.</p>
            </div>
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">📢 3. Track Updates</h3>
                <p class="text-gray-300">Get notified about the progress of your submission.</p>
            </div>
        </div>
    </section>


    <section id="success-stories" class="py-20 text-center">
        <h2 class="text-3xl font-bold">Success Stories</h2>
        <p class="mt-4 text-gray-400">See how DigiSuraksha has helped citizens take action.</p>
        <div class="mt-8 grid md:grid-cols-2 gap-6 px-10">
            <div class="p-4 bg-gray-800 rounded shadow">
                <p>"I reported an online scam and got justice within weeks!"</p>
                <span class="text-gray-400">- Anonymous User</span>
            </div>
            <div class="p-4 bg-gray-800 rounded shadow">
                <p>"This platform gave me the courage to report domestic abuse safely."</p>
                <span class="text-gray-400">- Survivor</span>
            </div>
        </div>
    </section>


    <section class="py-20 bg-gray-800 text-center">
        <h2 class="text-3xl font-bold">Law Enforcement Collaboration</h2>
        <p class="mt-4 text-gray-300">We ensure reports are securely forwarded to the relevant authorities.</p>
    </section>

    <section class="py-20 text-center">
        <h2 class="text-3xl font-bold">Resources & Safety Tips</h2>
        <div class="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">Know Your Rights</h3>
                <p class="text-gray-300">Understand what legal protections you have as a whistleblower.</p>
            </div>
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">Stay Anonymous</h3>
                <p class="text-gray-300">Use VPNs or secure browsers when submitting sensitive reports.</p>
            </div>
            <div class="p-4 bg-gray-700 rounded shadow">
                <h3 class="text-xl font-semibold">Emergency Contacts</h3>
                <p class="text-gray-300">Find hotlines for urgent help in different regions.</p>
            </div>
        </div>
    </section>

    <section id="faq" class="py-20 bg-gray-800 text-center">
        <h2 class="text-3xl font-bold">Frequently Asked Questions</h2>
        <div class="mt-8 px-10">
            <details class="mb-4 bg-gray-700 p-4 rounded">
                <summary class="font-semibold">🔒 Is my identity truly anonymous?</summary>
                <p class="text-gray-300 mt-2">Yes, we do not store any personal data unless you choose to provide it.</p>
            </details>
            <details class="mb-4 bg-gray-700 p-4 rounded">
                <summary class="font-semibold">📌 Can I track my report?</summary>
                <p class="text-gray-300 mt-2">Yes, you'll receive a unique tracking ID after submission.</p>
            </details>
        </div>
    </section>

    <section id="contact" class="py-20 text-center">
        <h2 class="text-3xl font-bold">Contact Us</h2>
        <p class="text-gray-400 mt-2">Have questions? Reach out to our support team.</p>
        <a href="mailto:support@digisuraksha.com" class="mt-4 inline-block px-6 py-2 bg-green-500 rounded shadow">
            Email Support
        </a>
    </section>

    <footer class="bg-gray-900 p-6 text-center text-gray-400">
        &copy; 2025 DigiSuraksha. All Rights Reserved.
    </footer>
    </>
  )
}
