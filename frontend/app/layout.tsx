import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | E-commerce online plateform",
    default: "Welcome | E-commerce online plateform",
  },
  description: "E-commerce online plateform",
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} relative min-h-screen w-full bg-gray-700 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
