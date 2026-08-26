//import type { Metadata } from "next";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   openGraph: {
//     title: "",
//     description: "",
//     url: ``,
//     siteName: "",
//     images: [
//       {
//         url: "",
//         width: 1200,
//         height: 630,
//         alt: "",
//       },
//     ],
//     type: "article",
//   },
// };

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
  // modal,
}: Readonly<{
  children: React.ReactNode;
  // modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
