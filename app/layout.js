import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Seperator from "./components/seperator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | DigiSuraksha",
    default: "DigiSuraksha"
  },
  description: "Report crimes anonymously with our secure and private crime reporting app. Submit reports, track case updates, and communicate safely with law enforcement—no identity required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Seperator className="mb-8 shadow" />
        <main className="px-8 py-2">
          {children}
        </main>
      </body>
    </html>
  );
}
