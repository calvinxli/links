import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });
const author = "Calvin Li";

export const metadata: Metadata = {
  applicationName: author,
  title: author,
  description: "Contains links for Calvin's social media, affiliates and more",
  authors: [{ name: author, url: "https://www.calvinxli.com" }],
  creator: author,
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#000000" },
  colorScheme: "dark",
  robots: "index, follow",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <Head>
      <link rel="canonical" href="https://www.calvinxli.com" key="canonical" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-TEL22919JK" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TEL22919JK');
        `}
    </Script>
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
