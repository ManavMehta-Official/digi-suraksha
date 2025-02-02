import Link from "next/link";


export default function Home() {
  return (
    <>
    <section className="flex flex-col justify-center items-center text-center py-20 ">
        <h2 className="text-5xl font-bold">Report Crime <br /> Anonymously & Securely</h2>
        <p className="mt-4 text-slate-500 dark:text-gray-400 max-w-md items-center">
        Our secure and anonymous platform allows you to report incidents without fear of exposure.
        </p>
        <Link href="/report" className="mt-6 px-6 py-2.5 bg-red-500 rounded shadow-lg hover:shadow-2xl transition text-white">
            Report Crime
        </Link>
    </section>

    <section id="how-it-works" className="pb-20 pt-10 bg-gray-50 dark:bg-gray-800 text-center rounded-lg">

        <h2 className="text-4xl font-bold">How It Works</h2>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div className="p-4 dark:bg-gray-700 bg-gray-100 dark:bg-red-500 rounded-md shadow">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2">📩 Submit a Report</h3>
                <p className=" text-gray-700 dark:text-gray-200">Fill out the crime details while keeping your identity hidden.</p>
            </div>
            <div className="p-4 dark:bg-gray-700 rounded-md shadow  bg-gray-100 dark:bg-red-500 ">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2">📎 Attach Evidence</h3>
                <p className="text-gray-700 dark:text-gray-200">Upload images, videos, or documents to support your report.</p>
            </div>
            <div className="p-4 dark:bg-gray-700 rounded-md shadow bg-gray-100 dark:bg-red-500">
                <h3 className="text-xl text-black dark:text-white font-semibold mb-2">📢 Track Updates</h3>
                <p className="text-gray-700 dark:text-gray-200">Get notified about the progress of your crime reported.</p>
            </div>
        </div>
    </section>

    



    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="bg-white dark:bg-gray-800">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="md:flex md:items-end md:justify-between">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <p className="mt-6 max-w-lg leading-relaxed text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
          sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
          autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
        </p>
      </div>

      <a
        href="#"
        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
      >
        <span className="font-medium"> Read all reviews </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
    

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 bg-white dark:bg-gray-800 ">
      <blockquote className="flex h-full flex-col justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 p-6 shadow-xs sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 p-6 dark:bg-red shadow-xs sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>

      <blockquote className="flex h-full flex-col justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 p-6 shadow-xs sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>

            <svg
              className="size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Stayin' Alive</p>

            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
              No, Rose, they are not breathing. And they have no arms or legs … Where are they? You
              know what? If we come across somebody with no arms or legs, do we bother resuscitating
              them? I mean, what quality of life do we have there?
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-6">
          &mdash; Michael Scott
        </footer>
      </blockquote>
    </div>
  </div>
</section>

<section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Resources & Safety Tips</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 px-10">
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Know Your Rights</h3>
                <p className="text-gray-700 dark:text-gray-300">Understand what legal protections you have as a whistleblower.</p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Stay Anonymous</h3>
                <p className="text-gray-700 dark:text-gray-300">Use VPNs or secure browsers when submitting sensitive reports.</p>
            </div>
            <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow">
                <h3 className="text-xl font-semibold">Emergency Contacts</h3>
                <p className="text-gray-700 dark:text-gray-300">Find hotlines for urgent help in different regions.</p>
            </div>
        </div>
    </section>

    <section id="faq" className="pb-10 bg-white dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8 px-10">
            <details className="mb-4 bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <summary className="font-semibold">🔒 Is my identity truly anonymous?</summary>
                <p className="text-gray-700 dark:text-gray-300 mt-2">Yes, we do not store any personal data unless you choose to provide it.</p>
            </details>
            <details className="mb-4  bg-gray-50 dark:bg-gray-700 p-4 rounded">
                <summary className="font-semibold">📌 Can I track my report?</summary>
                <p className=" text-gray-700 dark:text-gray-300 mt-2">Yes, you'll receive a unique tracking ID after submission.</p>
            </details>
        </div>
    </section>

    <section id="contact" className="pb-10 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">Have questions? Reach out to our support team.</p>
        <a href="mailto:support@digisuraksha.com" className="mt-4 inline-block px-6 py-2 bg-green-500 rounded shadow">
            Email Support
        </a>
    </section>
    <footer className="dark:bg-gray-900 p-6 text-center  text-black dark:text-gray-400">
        &copy; 2025 DigiSuraksha. All Rights Reserved.
    </footer>
    </>
  )
}
