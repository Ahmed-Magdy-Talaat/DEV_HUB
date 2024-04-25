import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font_Inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font_spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevFlow is a leading online community for developers, where they can ask questions, share knowledge, and collaborate to solve coding problems. With millions of active users and a vast repository of questions and answers covering various programming languages and technologies, DevFlow serves as an invaluable resource for programmers of all skill levels. Through its unique system of community moderation and reputation scoring, users can find high-quality answers to their queries and contribute to the collective knowledge of the developer community.",
  icons: {
    icon: "../../public/assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
