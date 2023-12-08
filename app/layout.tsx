import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import MouseParticleTrail from "@/components/sub/MouseParticleTrail"
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#000000] overflow-y-scroll `}
      >
        <MouseParticleTrail>
        <StarsCanvas/>
        <Navbar />
        {children}
        </MouseParticleTrail>
      </body>
    </html>
  );
}
