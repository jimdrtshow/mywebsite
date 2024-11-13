import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Heading() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[10vh] w-[100vw] flex justify-start items-center ">
        <p className="text-white text-5xl tracking-widest mx-10">
          <span className="text-spotify"> Our </span>Services.
        </p>
      </div>

      {/* Tabs & Phones */}
      <div className="xl:hidden h-[90vh] md:h-[150vh] w-[100vw] flex flex-col justify-around items-center">
        <div className="h-1/4 md:h-[40vh] w-4/5 md:w-3/5 ">
          {" "}
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <Image
                className="rounded-xl "
                src="/images/test.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover" // L'image couvrira entièrement le conteneur
                objectPosition="center" // Centrer l'image dans le conteneur
              />
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Expert
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 2500€
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="h-1/4 md:h-[40vh] w-4/5 md:w-3/5 ">
          {" "}
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <Image
                className="rounded-xl "
                src="/images/test.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover" // L'image couvrira entièrement le conteneur
                objectPosition="center" // Centrer l'image dans le conteneur
              />
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Expert
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 2500€
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="h-1/4 md:h-[40vh] w-4/5 md:w-3/5 ">
          {" "}
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <Image
                className="rounded-xl "
                src="/images/test.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover" // L'image couvrira entièrement le conteneur
                objectPosition="center" // Centrer l'image dans le conteneur
              />
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Expert
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 2500€
              </Badge>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* PC */}
      <div className="hidden xl:flex h-[90vh] w-[100vw] justify-around items-center">
        <div className="h-2/4 w-1/4 ">
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <div className=" w-[25vw] h-[90vh]">
                <Image
                  className="rounded-xl"
                  src="/images/test.jpg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover" // L'image couvrira entièrement le conteneur
                  objectPosition="center" // Centrer l'image dans le conteneur
                />
              </div>
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Basic
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 350€
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="h-2/4 w-1/4 ">
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <div className=" w-[25vw] h-[90vh]">
                <Image
                  className="rounded-xl"
                  src="/images/test.jpg"
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="cover" // L'image couvrira entièrement le conteneur
                  objectPosition="center" // Centrer l'image dans le conteneur
                />
              </div>
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Middle
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 800€
              </Badge>
            </CardFooter>
          </Card>
        </div>
        <div className="h-2/4 w-1/4 ">
          <Card className="h-full w-full bg-transparent border-none">
            <CardContent className="h-5/6 w-full relative">
              <Image
                className="rounded-xl "
                src="/images/test.jpg"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover" // L'image couvrira entièrement le conteneur
                objectPosition="center" // Centrer l'image dans le conteneur
              />
            </CardContent>
            <CardFooter className="h-1/6 w-full">
              <Badge className="rounded-xl text-white " variant="outline">
                Expert
              </Badge>
              <div className="w-3"></div>
              <Badge
                className="rounded-xl bg-spotify text-white border-none"
                variant="outline"
              >
                A partir de 2500€
              </Badge>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
