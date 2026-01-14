"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import CategorySidebar from "@/components/common/CategorySidebar";
import Footer from "@/components/common/Footer";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: Props) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  
  useEffect(() => {
    if (pathname?.startsWith("/dashboard")) {
      setIsSidebarOpen(false);
    } else if( pathname?.startsWith("/login")) {
      setIsSidebarOpen(false);
    }
    else if( pathname?.startsWith("/register")) {
      setIsSidebarOpen(false);
    }
    else {
      setIsSidebarOpen(true); // optional: reopen on other routes
    }
  }, [pathname]);

  return (
    <StoreProvider>
      <Toaster position="bottom-right" richColors />
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="pt-16 flex min-h-screen bg-zinc-100">
        <aside
          className={`${isSidebarOpen ? "block" : "hidden"} shadow-2xl w-64 shrink-0 transition-all duration-300 bg-white sticky top-16 h-[calc(100vh-4rem)]`}
        >
          <CategorySidebar />
        </aside>
        <main className="flex-1">
          {children}
          <Footer />
        </main>
      </div>
    </StoreProvider>
  );
}
