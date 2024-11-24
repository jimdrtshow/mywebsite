"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import clsx from "clsx";
import menuItems from "@/data/menuItems"; // Assure-toi que tu as ce fichier correctement
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* CONTAINER MENU TRUE */}
      <div
        className={clsx(
          "w-screen h-[80vh] absolute bg-white z-20 transform transition-transform duration-1000 -top-[80vh]",
          {
            block: !isMenuOpen,
            "translate-y-[80vh]": isMenuOpen,
          }
        )}
      >
        <div className="w-screen h-[15vh] lg:hidden flex items-center justify-center relative top-0  z-10">
          <div className="w-11/12 h-full flex justify-between items-center border-b border-black">
            {/* EMPTY */}
            <div className="w-1/2 h-full flex justify-start items-center"></div>
            {/* MENU BUTTON TRUE */}
            <div className="w-1/2 h-full flex justify-end items-center ">
              <Button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className=" w-auto bg-transparent  flex items-center justify-between pt-4 shadow-white"
                variant="secondary"
              >
                <p className="text-sm text-center tracking-tight ">CLOSE</p>
              </Button>
            </div>
          </div>
        </div>
        {/* MENU  */}
        <div className="w-screen h-[50vh]  flex items-center justify-center">
          <div className="w-10/12 h-full flex flex-col items-start justify-center">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-black font-semibold p-6 flex items-start justify-between text-xl"
              >
                <span className="text-gray-600 text-xs pr-3">0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* BUTTON */}
        <div className="w-screen h-[15vh]  flex items-center justify-center">
          <div className="w-10/12 h-full flex flex-col items-start justify-start">
            <Button
              className=" w-[175px] border border-gray-300 bg-transparent text-black flex items-center justify-between -tracking-tight "
              variant="secondary"
            >
              <FaArrowRight className="text-black -rotate-45" />
              Contact
            </Button>
          </div>
        </div>
      </div>
      {/* CONTAINER MENU FALSE */}
      <div className="w-screen h-[15vh] lg:hidden flex items-center justify-center relative top-0  z-10">
        <div className="w-11/12 h-full flex justify-between items-center border-b border-white">
          {/* TITLE */}
          <div className="w-1/2 h-full flex justify-start items-center">
            <h1 className="text-2xl text-center  font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent">
              JimDrt.
            </h1>
          </div>
          {/* MENU BUTTON FALSE */}
          <div className="w-1/2 h-full flex justify-end items-center ">
            <Button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className=" w-auto bg-transparent text-white flex items-center justify-between pt-4 "
              variant="secondary"
            >
              <p className="text-sm text-center text-gray-300  tracking-tight ">
                MENU
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
