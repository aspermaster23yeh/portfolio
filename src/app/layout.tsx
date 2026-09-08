import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Robles — CEO de Que Plan App",
  description:
    "Portafolio de Michael Robles (@aspermaster23dev), CEO de Que Plan App. Diseño de producto y desarrollo frontend.",
  authors: [{ name: "Michael Robles" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-canvas font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
