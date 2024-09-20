"use client";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: hover on links

export const Header = () => {
  const currentPath = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Rare plants", path: "/rare-plants" },
    { name: "About us", path: "/about-us" },
  ];

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <header className="bg-white p-7 shadow-md">
      <div className="flex justify-between md:hidden">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={132} height={37} />
        </Link>
        <Image src={Menu} alt="Menu" width={23} height={15} />
      </div>
      <div className="hidden md:flex justify-around">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={132} height={37} />
        </Link>
        <nav className="flex gap-10 items-center">
          {pages.map(page => (
            <Link
              href={page.path}
              alt={page.name}
              className={isActive(page.path) ? "tag text-[16px]" : ""}
            >
              {page.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
