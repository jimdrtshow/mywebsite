import React from "react";
import CardComponent from "./CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

// Données des cartes
const cardsData = [
  {
    title: "Basic",
    description:
      "Two to 5-page showcase website, ideal for search engine optimization ",
    price: 600,
    functionality1: "Responsive design",
    functionality2: "Clear and easy navigation",
    functionality3: "Simple and quick contact form",
    functionality4: "SEO optimization",
  },
  {
    title: "Pro",
    description:
      "Two to 5-page showcase website, ideal for search engine optimization ",
    price: 600,
    functionality1: "Responsive design",
    functionality2: "Clear and easy navigation",
    functionality3: "Simple and quick contact form",
    functionality4: "SEO optimization",
  },
  {
    title: "Expert",
    description:
      "Multi-pages e-commerce website, ideal for search engine optimization ",
    price: 600,
    functionality1: "Responsive design",
    functionality2: "Clear and easy navigation",
    functionality3: "Simple and quick contact form",
    functionality4: "SEO optimization",
  },
];

// Composant Heading avec le carrousel
export default function Heading() {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className="h-[20vh] w-full flex items-center justify-center ">
        <div className="h-5/6 w-5/6 flex items-center justify-center">
          <h1 className="text-6xl lg:text-6xl md:text-5xl text-center font-bold tracking-wider bg-heading-gradient bg-clip-text text-transparent ">
            Solutions
          </h1>
        </div>
      </div>
      <div className="h-[60vh] w-screen flex items-center justify-center">
        {/* PHONE & TAB CAROUSEL */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm lg:hidden"
        >
          <CarouselContent>
            {/* Itérer sur les données des cartes */}
            {cardsData.map((card, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <div className="p-1">
                  <CardComponent
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    functionality1={card.functionality1}
                    functionality2={card.functionality2}
                    functionality3={card.functionality3}
                    functionality4={card.functionality4}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* PC CARDS */}
        <div className="hidden lg:flex items-center justify-center">
          {cardsData.map((card, index) => (
            <div className="w-1/3 h-[60vh pr-10 pl-10 flex items-center justify-around ">
              <CardComponent
                title={card.title}
                description={card.description}
                price={card.price}
                functionality1={card.functionality1}
                functionality2={card.functionality2}
                functionality3={card.functionality3}
                functionality4={card.functionality4}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[20vh] w-full flex items-center justify-center ">
        <div className="h-5/6 w-5/6 flex items-center justify-center">
          <Button
            className=" rounded-full border-none bg-myGreyButtonBg"
            variant="outline"
          >
            View Plans
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
