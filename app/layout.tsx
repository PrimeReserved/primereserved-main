"use client";

// layout.tsx
import React from "react";
import { usePathname } from "next/navigation";
import FooterHome from "@/components/Footer/FooterHome";
import HeaderHome from "@/components/Header/HeaderHome";
import HeaderOther from "@/components/Header/HeaderOther";
import FooterOther from "@/components/Footer/FooterOther";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "../styles/custom.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {isHomePage ? <HeaderHome /> : <HeaderOther />}
          {children}
          {isHomePage ? <FooterHome /> : <FooterOther />}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;

import { Providers } from "./providers";
