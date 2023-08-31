import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "@/app/globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const author = "Calvin Li";

export const metadata: Metadata = {
  applicationName: author,
  title: author,
  description: "Contains links for Calvin's social media, affiliates and more",
  authors: [{ name: author, url: "https://calvinxli.com" }],
  creator: author,
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#000000" },
  colorScheme: "dark",
  robots: "index, folloow",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    {/* <Head> */}
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-TEL22919JK" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TEL22919JK');
        `}
    </Script>
    {/* </Head> */}
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
