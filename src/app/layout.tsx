
import type { Metadata } from "next";
import Navbar from "./Common/Navbar"
import "./globals.css";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Maksymilian Gembarzewski - Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
