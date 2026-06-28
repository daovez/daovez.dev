import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, Ubuntu } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Daovez | Full Stack Developer",
  description:
    "Portfolio de David López Velasco. Desarrollo web, diseño UI/UX, ilustración digital y proyectos Full Stack.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Daovez | Full Stack Developer",
    description:
      "Portfolio de David López Velasco. Desarrollo web, diseño UI/UX e ilustración digital.",
    url: "https://daovez.dev",
    siteName: "Daovez",
    images: [
      {
        url: "/hero-dev.jpg",
        width: 1200,
        height: 630,
        alt: "Daovez Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`
        ${inter.variable}
        ${spaceGrotesk.variable}
        ${ubuntu.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}