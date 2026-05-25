import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topo from "./ui/topo";
import Menu from "./ui/menu";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema das Aulas",
  description: "Disciplina Tecnologias Web - CCOMP - UFSJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>
        <div className='h-dvh grid grid-cols-8 grid-rows-8'>
          <Menu />
          <Topo />
          <div className='col-span-7 row-span-7 p-5 overscroll-contain overflow-y-auto'>
            {children}
          </div>
        </div>
        </SessionProvider>
      </body>
    </html>
  );
}
