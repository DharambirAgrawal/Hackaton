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
        href="#teamSection"
      >
        Team
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#teamSection"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
