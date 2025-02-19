import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Define font variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the website
export const metadata = {
  title: "Raja Sekhar Reddy Gajjala - Technology Leader",
  description: "Portfolio website of Raja Sekhar Reddy Gajjala, Technology Leader in Data Engineering",
};

/**
 * RootLayout component for the Next.js application.
 * This component wraps the entire application and provides the basic layout.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The children components to render.
 * @returns {React.ReactNode} - The rendered component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://assets.calendly.com/assets/external/widget.css" 
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/blanka"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
