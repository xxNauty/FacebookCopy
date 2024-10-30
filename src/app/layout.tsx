import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Copy of Facebook created using Next.js",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pl">
      <body className="bg-slate-100 text-black">
        {children}
      </body>
    </html>
  );
}
