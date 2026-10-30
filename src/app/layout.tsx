import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Sergio Michael Robles Zambrano — PEJ 2026 · Ciencia y Tecnología",
  description:
    "Candidato al Premio Estatal de la Juventud 2026 en Desarrollo e Innovación de Mejoras Tecnológicas. GDG Leader Tepic, fundador de Que Plan App y Estado Limpio, InnovaTec / HACKATEC.",
  authors: [{ name: "Sergio Michael Robles Zambrano" }],
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
