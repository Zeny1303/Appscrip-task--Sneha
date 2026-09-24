import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discover Our Products | Appscrip PLP",
  description: "Explore our curated collection of premium products. Filter by category, price, and options with fast server-side rendering.",
  keywords: ["E-commerce", "Product Listing Page", "PLP", "Appscrip", "Next.js", "React"],
  openGraph: {
    title: "Discover Our Products | Appscrip PLP",
    description: "Explore our curated collection of premium products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
