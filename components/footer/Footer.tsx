import Link from "next/link";
import { Github, Twitter, Youtube } from "lucide-react";
import DarkModeToggle from "@/components/footer/DarkModeToggle";

const FooterIconLink = ({ href, title, children }) => {
  return (
    <Link href={href} prefetch={false} className="hover:text-indigo-500">
      {children}
      <span className="sr-only">{title}</span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <FooterIconLink title="Youtube" href="#">
            <Youtube className="h-6 w-6" />
          </FooterIconLink>{" "}
          <FooterIconLink title="Github" href="#">
            <Github className="h-6 w-6" />
          </FooterIconLink>
          <FooterIconLink title="Twitter" href="#">
            <Twitter className="h-6 w-6" />
          </FooterIconLink>
        </div>
        <DarkModeToggle />
        <p className="mt-4 md:mt-0 text-sm ">
          &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
          <a className="text-indigo-500" href="'https://github.com/PierreTsia'">
            Pierre Tsia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
