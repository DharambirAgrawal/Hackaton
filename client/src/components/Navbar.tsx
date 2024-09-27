import { ModeToggle } from "./DarkLight/ThemeButton";
import Link from "next/link";
const Navbar = () => {
  {
    /* Navbar <ModeToggle /> */
  }
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#features"
      >
        Features
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#about"
      >
        About
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
