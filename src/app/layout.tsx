import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "@/components/LayoutClient";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aamar Dokan",
  description: "aamardokan Grocery is an e-commerce app for grocery shopping.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader 
          color="#10b981"
          showSpinner={false}
          shadow="0 0 10px #10b981,0 0 5px #10b981"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
