import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Warning from "@/components/dashboard/warning";
import { PrivyWalletProvider } from "@/components/providers/PrivyProviders";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Balancer Protocol",
  description: "Decentralized asset management and trading platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable}  antialiased`}>
        <PrivyWalletProvider>
          <Navigation />
          <Warning />
          {children}
        </PrivyWalletProvider>
      </body>
    </html>
  );
}
