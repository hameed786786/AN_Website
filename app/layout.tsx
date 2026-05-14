import type { Metadata } from "next";
import { Geist, Archivo ,Poppins } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Procevia",
  description: "We build systems that scale businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${archivo.className}`}>{children}</body>
    </html>
  );
}