import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "McFly® - Création de sites web sur-mesure pour PME et professions libérales.",
  description:
    "McFly® - Création de sites web haute performance, sur-mesure, sans CMS, pour PME et professions libérales. Des sites fluides, optimisés pour un référencement maximal et une expérience client exceptionnelle. ",
  keywords:
    "création de site web sur-mesure, sites web professionnels, création site sans CMS, développement web pour PME, développement web pour professions libérales, référencement naturel, sites rapides et optimisés, création site web performant, site web personnalisé, agence web pour PME, site web sur-mesure, création site responsive, développement site web haut de gamme, SEO pour PME, développement web pour indépendants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <body
        className={`${GeistSans.className} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
