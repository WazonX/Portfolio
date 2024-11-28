
import type { Metadata } from "next";
import Navbar from "./Common/Navbar"
import "./globals.css";
import { MainBody as Mbody } from "./Common/MainBody/MainBody";

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
        <Mbody>
        <Navbar/>
        {children}

        </Mbody>
      </body>
    </html>
  );
}
