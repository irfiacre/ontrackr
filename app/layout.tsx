import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/LayoutCompmontents/Navbar";
import Footer from "./components/LayoutCompmontents/Footer";
import Sidebar from "./components/LayoutCompmontents/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <div className="px-4 py-2">{children}</div>
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
