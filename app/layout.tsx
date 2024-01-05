import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/LayoutCompontents/Navbar";
import Footer from "./components/LayoutCompontents/Footer";
import Sidebar from "./components/LayoutCompontents/Sidebar";

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
        <div className="flex">
          <Sidebar />
          <div
            className="px-2 py-2"
            style={{ padding: "3vh 3%", width: "100%" }}
          >
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
