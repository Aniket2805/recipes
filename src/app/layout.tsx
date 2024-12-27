import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipes Hub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black">
          <StoreProvider>
            <NavbarDemo />
            {children}
            <Footer />
          </StoreProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
