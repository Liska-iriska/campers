import type { Metadata } from "next";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "You can find everything you want in our catalog",
  openGraph: {
    title: "TravelTrucks",
    description: "You can find everything you want in our catalog",
    url: `https://campers-beryl-theta.vercel.app`,
    siteName: "TravelTrucks",
    images: [
      {
        url: "https://campers-beryl-theta.vercel.app/img/main-img@2x.webp",
        width: 1200,
        height: 630,
        alt: "TravelTrucks logo",
      },
    ],
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Toaster
          toastOptions={{
            className: "toaster",
            duration: 4000,
            style: {
              width: "60vw",
              maxWidth: "60vw",
              fontSize: "24px",
              padding: "32px",
              fontWeight: "700",
              borderRadius: "16px",
              background: "#829b91c3",
              color: "#191919",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.33)",
            },
          }}
          position="top-center"
        />
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
