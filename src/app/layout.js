"use client";

import "./globals.css";
import React from "react";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import { usePathname } from "next/navigation";

const disableNavbarAndFooter = ["/login", "/register"];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {!disableNavbarAndFooter.includes(pathname) && <NavbarComponent />}
        <main>{children}</main>
        {!disableNavbarAndFooter.includes(pathname) && <FooterComponent />}
      </body>
    </html>
  );
}
