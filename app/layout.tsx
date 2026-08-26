import type { Metadata } from "next";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
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

export default function RootLayout({
  children,
  // modal,
}: Readonly<{
  children: React.ReactNode;
  // modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${#.variable} `}
    >
      <body>
        <TanStackProvider>
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </TanStackProvider>
      </body>
    </html>
  );
}
