import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "forgecraft — E-commerce Geek & Pop Culture",
  description: "Projeto acadêmico LES — E-commerce de produtos geek impressos em 3D",
};

// Este layout envolve TODAS as páginas do site.
// É aqui que carregamos as fontes do Google Fonts uma única vez,
// em vez de repetir os <link> em cada página.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
