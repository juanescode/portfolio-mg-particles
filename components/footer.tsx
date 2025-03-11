import Link from "next/link";
import { Separator } from "./ui/separator";
import { Github } from "lucide-react";
import { ModeToggle } from "./toggle-theme";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="md:flex md:justify-between">
        <div>
          <h4 className="text-3xl font-bold my-6 md:my-0 text-ceneter">
            Michelle Galindo Ruiz
          </h4>
        </div>
        <div className="px-2 flex justify-between md:gap-8 items-center">
          <Link href="#about-me">Sobre mi</Link>
          <Link href="#services">Servcios</Link>
          <Link href="#portfolio">Portafolio</Link>
           <ModeToggle />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="text-center flex justify-center items-center gap-2">
        <Link
          href="https://github.com/juanescode"
          className="flex items-center gap-1 text-white hover:text-gray-400 transition"
          >
          <span>&copy; 2025 | Portfolio made by</span>
          <span>JuanesCode</span>
          <Github className="w-4 h-4" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
