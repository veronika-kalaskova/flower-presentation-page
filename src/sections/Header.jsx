import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Menu from "@/assets/menu.svg";

// TODO: active link with bg

export const Header = () => {
  return (
    <header className="bg-white p-7 shadow-md">
      <div className="flex justify-between md:hidden">
        <Image src={Logo} alt="Logo" width={132} height={37} />
        <Image src={Menu} alt="Menu" width={23} height={15} />
      </div>
      <div className="hidden md:flex justify-around">
        <Image src={Logo} alt="Logo" width={132} height={37} />
        <nav className="flex gap-10 items-center">
          <a href="#" className="tag text-[16px]">Home</a>
          <a href="#">Rare plants</a>
          <a href="#">About us</a>
        </nav>
      </div>
    </header>
  );
};
