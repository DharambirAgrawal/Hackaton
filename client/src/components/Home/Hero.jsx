import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import HeroImage from "../../../public/hero.jpg";
const Hero = () => {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-2">
        <div className="mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Hackaton Developer Here
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Let's collaborate and build something amazing together.
          </p>
          <Button variant="outline">
            <Link href="#">Get started</Link>
          </Button>
        </div>
        <div className="lg:mt-0 lg:flex max-md:hidden justify-center ">
          <Image
            src={HeroImage}
            alt="Hero image"
            width={500}
            height={500}
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
