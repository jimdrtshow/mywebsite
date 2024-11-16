import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardPrice,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

interface CardComponentProps {
  title: string;
  description: string;
  price: number;
  functionality1: string;
  functionality2: string;
  functionality3: string;
  functionality4: string;
}

export default function CardComponent({
  title,
  description,
  price,
  functionality1,
  functionality2,
  functionality3,
  functionality4,
}: CardComponentProps) {
  return (
    <div>
      <Card className="bg-greyCard border-none">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-white">
            {description}
          </CardDescription>
        </CardHeader>
        <CardPrice className="text-white">
          <span className="text-myGreyWebsiteBg text-sm">A partir de: </span>{" "}
          {price}
          <span>$</span>
        </CardPrice>
        <CardContent className="text-white">
          <h3 className="flex items-center">
            <span className="mr-2">
              <FaCheck className="text-blue-500" />
            </span>
            {functionality1}
          </h3>
          <h3 className="flex items-center">
            <span className="mr-2">
              <FaCheck className="text-blue-500" />
            </span>
            {functionality2}
          </h3>
          <h3 className="flex items-center">
            <span className="mr-2">
              <FaCheck className="text-blue-500" />
            </span>
            {functionality3}
          </h3>
          <h3 className="flex items-center">
            <span className="mr-2">
              <FaCheck className="text-blue-500" />
            </span>
            {functionality4}
          </h3>
        </CardContent>
        <CardFooter>
          <Button className=" rounded-full" variant="outline">
            contact us
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
