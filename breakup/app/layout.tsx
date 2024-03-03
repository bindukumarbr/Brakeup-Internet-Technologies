import NavBar from "./Components/Navbar";
import "./globals.css"
import { Inter } from "next/font/google";
import type { Metadata } from "next";


const inter = Inter({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Brakeup Internet Technologies",
  description: "New app development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
