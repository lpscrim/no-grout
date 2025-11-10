import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans, Karla } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "../components/Functions/providers";
import ColorPicker from "@/components/functions/ColorPicker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});
const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "No Grout About It",
  description: "Family Tiling Business in Scotland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} ${karla.variable} antialiased scroll-smooth`}
      >
          <ColorPicker />
          <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
