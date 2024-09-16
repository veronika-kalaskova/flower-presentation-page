"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Map from "@/assets/map.svg";
import Email from "@/assets/email.svg";
import Phone from "@/assets/phone.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

// TODO: hover on links

export const Footer = () => {
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
    <footer className="bg-[#FCE9EC] p-7">
      <div className="flex flex-col gap-10 md:flex-row justify-evenly items-start">
        <Image src={Logo} />
        <nav className="flex gap-5 flex-col">
          {pages.map((page) => (
            <Link
              href={page.path}
              alt={page.name}
              className={isActive(page.path) ? "tag text-[16px]" : ""}
            >
              {page.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-5 flex-col">
          <div className="flex items-center">
            <Image
              src={Phone}
              width={40}
              height={50}
              className="bg-[#f5b3bf64] py-1 px-2 rounded-lg inline-flex"
            />
            <span className="ml-3">777 530 430</span>
          </div>
          <div className="flex items-center">
            <Image
              src={Email}
              width={40}
              height={60}
              className="bg-[#f5b3bf64] py-1 px-2 rounded-lg inline-flex min-h-[36px]"
            />
            <span className="ml-3">flowers@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Image
              src={Map}
              width={40}
              height={50}
              className="bg-[#f5b3bf64] py-1 px-2 rounded-lg inline-flex"
            />
            <span className="ml-3">Springfield, IL 62704</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
