import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clean Next App",
  description: "A simple, clean Next.js app",
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
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Nav />
        <main className="flex-1 mx-auto w-full max-w-3xl px-6 py-16">
          {children}
        </main>
        <footer className="mx-auto w-full max-w-3xl px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Clean Next App
        </footer>
      </body>
    </html>
  );
}
