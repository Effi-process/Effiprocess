import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Effiprocess",
  description: "Modern websites with AI automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
