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
  title: "KevIsDev | Full-Stack Developer",
  description: "Crafting seamless digital experiences with cutting-edge technologies. Specialized in full-stack development, Let's build something amazing together.",
  metadataBase: new URL('https://kevisdev.tech'),
  other: {
    cryptomus: '278ce1bd'
  },
  openGraph: {
    title: "KevIsDev | Full-Stack Developer",
    description: "Crafting seamless digital experiences with cutting-edge technologies. Specialized in full-stack development, Let's build something amazing together.",
    url: "https://kevisdev.tech",
    siteName: "KevIsDev Portfolio",
    images: [
      {
        url: "/images/KevIsDev.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KevIsDev | Full-Stack Developer",
    description: "Crafting seamless digital experiences with cutting-edge technologies. Specialized in full-stack development, Let's build something amazing together.",
    images: ["/images/KevIsDev.png"], // Replace with your actual image path
    creator: "@KevIsDev", // Replace with your Twitter handle
  },
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web3",
    "Payment Integration",
    "Frontend Development",
    "Backend Development",
  ],
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
