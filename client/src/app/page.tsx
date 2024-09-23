"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Clicked");
    try {
      // const data = await fetch(`${process.env.NEXT_PUBLIC_SERVERHOST}/user/signup`, {
      // //  next: { revalidate: 60} ,
      //   // cache: 'force-cache' 
      // });
      const data = await fetch(`${process.env.NEXT_PUBLIC_SERVERHOST}/user/register`,{
         next: { revalidate: 60}});
      const res = await data.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Hello world</h1>
      <Button onClick={handleClick}>Click me </Button>
    </div>
  );
}
