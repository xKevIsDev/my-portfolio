import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KevIsDev",
  description: "my portfolio",
  openGraph: {
    title: "KevIsDev",
    description: "my portfolio",
    url: "https://kevisdev.vercel.app", // Replace with your actual domain
    siteName: "KevIsDev Portfolio",
    images: [
      {
        url: "/KevIsDev.png", // Replace with your actual image path
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KevIsDev's Portfolio",
    description: "my portfolio",
    images: ["/KevIsDev.png"], // Replace with your actual image path
    creator: "@KevIsDev", // Replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
