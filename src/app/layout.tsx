import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Robles — CEO de Que Plan App · GDG Leader",
  description:
    "Portafolio de Michael Robles (@aspermaster23dev), CEO de Que Plan App y Google Developer Groups Leader desde 2023. Desarrollador full stack — Flutter, Firebase, Vue, Next.js y más.",
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
