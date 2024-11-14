import Image from "next/image";

export default function Projects() {
  return (
    <div className="h-auto w-auto">
      <ul
        className="max-m-[1100px] my-auto flex flex-wrap gap-[2vmin] px-[14px] py-0
"
      >
        <li className="h-[250px] grow">
          <Image
            src="/images/project1.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
        <li className="h-[250px] grow">
          <Image
            src="/images/project2.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
        <li className="h-[250px] grow">
          <Image
            src="/images/project3.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
        <li className="h-[250px] grow">
          <Image
            src="/images/project4.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
        <li className="h-[250px] grow">
          <Image
            src="/images/project5.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
        {/* Watch Global.css */}
        <li className="h-[250px] grow">
          <Image
            src="/images/project6.png"
            width={500}
            height={250}
            alt="Picture of the author"
            className="w-[100%] h-[100%] object-cover "
          />
        </li>
      </ul>
    </div>
  );
}
