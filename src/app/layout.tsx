"use client"
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import CategorySidebar from "@/components/common/CategorySidebar";
import { useState } from "react";
import Footer from "@/components/common/Footer";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "TechSoul Grocery",
//   description: "TechSoul Grocery is a e-commerce app for grocery shopping.",
// };

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster position="top-right" richColors />
        <StoreProvider>
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="pt-16 flex min-h-screen bg-zinc-100">
            <aside className={`${isSidebarOpen ? 'block' : 'hidden'} shadow-2xl w-64 shrink-0 transition-all duration-300  bg-white sticky top-16 h-[calc(100vh-4rem)]`}>
              <CategorySidebar />
          </aside>
          <main className="flex-1">
            {children}
          <Footer />
          </main>
        </div>
        </StoreProvider>
      </body>
    </html>
  );
}
