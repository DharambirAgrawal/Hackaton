import Image from "next/image";
import Hero from "../../public/hero.jpg";
const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            className="h-auto max-w-full rounded-lg"
            src={Hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
