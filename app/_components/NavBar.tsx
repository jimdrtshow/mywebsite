"use client"; // Ce fichier sera exécuté côté client uniquement (nécessaire pour Next.js 13 et supérieur)
import React from "react";
import { useState } from "react"; // Importation du hook useState pour gérer l'état du menu
import Link from "next/link"; // Importation du composant Link de Next.js pour les liens internes
import Image from "next/image"; // Importation du composant Image de Next.js pour optimiser les images
import cn from "classnames"; // Importation de classNames pour gérer dynamiquement les classes CSS

export default function Navbar() {
  // Déclaration de l'état "opened", qui va contrôler si le menu est ouvert ou fermé
  const [opened, setOpened] = React.useState(false);

  return (
    <nav className="w-screen h-[10vh] fixed top-0 bg-black text-white z-50 flex items-center justify-center">
      <div className="w-11/12 h-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">McFly</h1>

          <Image
            src="/logos/vercel.svg"
            alt="Logo"
            width={25}
            height={25}
            className="ml-4"
          />
        </div>

        {/* Le bouton hamburger, affiché uniquement sur mobile */}
        <div
          className={cn(
            "tham tham-e-squeeze tham-w-6 lg:hidden", // Classes de base pour l'animation et l'apparence du bouton hamburger
            { "tham-active": opened } // Si le menu est ouvert, ajoute la classe "tham-active" pour animer le bouton
          )}
          onClick={() => setOpened(!opened)} // Lorsqu'on clique, on inverse la valeur de "opened"
        >
          {/* Structure interne du bouton hamburger */}
          <div className="tham-box">
            <div className="tham-inner bg-white" />
          </div>
        </div>

        {/* Le menu déroulant */}
        {/* Il est caché sur les grands écrans (desktop), mais visible sur mobile si "opened" est vrai */}
        <ul
          className={cn(
            "absolute lg:static top-[10vh] left-0 w-full bg-gray-900 lg:w-auto lg:bg-transparent lg:flex lg:items-center lg:space-x-6 transition-all duration-300",
            {
              block: opened, // Si "opened" est vrai, le menu devient un bloc et apparaît
              "hidden lg:flex": !opened, // Si "opened" est faux, le menu est caché (en mobile) mais reste visible en desktop
            }
          )}
        >
          {/* Liste des éléments du menu */}
          <li>
            <Link
              href="/"
              className="block py-4 px-6 text-center hover:bg-gray-700 hover:text-green-500 lg:py-0 lg:px-0"
            >
              Home
            </Link>
            {/* Lien vers la page d'accueil */}
          </li>
          <li>
            <Link
              href="/about"
              className="block py-4 px-6 text-center hover:bg-gray-700 hover:text-green-500 lg:py-0 lg:px-0"
            >
              About
            </Link>
            {/* Lien vers la page "About" */}
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-4 px-6 text-center hover:bg-gray-700 hover:text-green-500 lg:py-0 lg:px-0"
            >
              Contact
            </Link>
            {/* Lien vers la page "Contact" */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
