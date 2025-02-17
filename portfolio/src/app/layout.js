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
  title: "Raja Sekhar Reddy Gajjala",
  description: "Portfolio Website",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
