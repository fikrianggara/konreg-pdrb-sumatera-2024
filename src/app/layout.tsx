import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Konreg PDRB Sumatera 2024",
  // description: "Generated by create next app",
};

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <Navbar />
      {children}
    </html>
  );
}
