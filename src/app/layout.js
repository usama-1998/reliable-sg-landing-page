import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reliable SG | Instant Battery Replacement",
  description: "24/7 Car Battery Replacement for PHV Drivers in Singapore. Onsite in 30 mins.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
