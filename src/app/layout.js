import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DiAnixSquare International Agency",
  description: "DiAnixSquare International Agency provides global education, travel, visa, and immigration consulting services.",
  
  keywords: [
    "Study Abroad",
    "Visa Services",
    "Immigration",
    "Travel Agency",
    "DiAnixSquare",
  ],
  authors: [{ name: "DiAnixSquare International Agency" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />

      </body>
    </html>
  );
}
