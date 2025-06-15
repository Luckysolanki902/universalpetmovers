import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Universal Pet Movers - Safe & Reliable Pet Transportation Services",
  description: "Professional pet transportation services across India. Safe boarding, pickup & drop, vet visits, and out-destination transport for dogs, cats, and birds. Air, road & ship transport available.",
  keywords: "pet transportation, pet movers, dog transport, cat transport, bird transport, pet boarding, vet visit, pet pickup drop, Ghaziabad, Noida, Jaipur, Udaipur, Mumbai, Lucknow",
  author: "Universal Pet Movers",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Universal Pet Movers - Safe & Reliable Pet Transportation Services",
    description: "Professional pet transportation services across India. We ensure safe and comfortable transport for your beloved pets.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
