import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button"; 


const Hero = () => {
  return (
    <section className="">
      <div className="grid w-full px-2 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-2 place-items-center border-2 border-dashed border-red-500">
        <div className="w-full flex flex-col items-center border-2 border-dashed border-red-500">
          <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center border-2 border-dashed">
            Welcome to Nourish Now
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
            Trust me, today's food will be delicious!
          </p>
          <Button variant="outline" className="text-center">
            <Link href="/#image-uploader">Let's Cook</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
