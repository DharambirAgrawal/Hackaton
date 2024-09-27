import Link from "next/link";
import { Rocket } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Rocket className="h-6 w-6 text-red-500" />
        <span className="ml-2 text-lg font-bold">GsuHacketon</span>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
