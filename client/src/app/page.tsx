"use client";
// import { Button } from "@/components/ui/button";
import Hero from "@/components/Home/Hero";
import ImageUploader from "@/components/Image-uploader";
export default function Home() {
  // const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log("Clicked");
  //   try {
  //     const data = await fetch(
  //       `${process.env.NEXT_PUBLIC_SERVERHOST}/user/register`,
  //       {
  //         method: "POST",
  //         next: { revalidate: 60 },
  //       }
  //     );
  //     const res = await data.json();
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <main>
      <Hero />
      {/* <Button onClick={handleClick} className=" bg-red-400">
        Click me
      </Button> */}
      <ImageUploader />
    </main>
  );
}
