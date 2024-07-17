import React, { useState } from "react";
import NavLinks from "./NavLinks";
import useScroll from "../../hooks/useScroll";
import Logo from "../Logo";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

const NavBar: React.FC = () => {
  const top = useScroll();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full z-30 transition duration-300 ease-in-out mb-1 ${
        !top ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
          <Logo />
        </div>
        <div className="group flex flex-col items-center">
          <HamburgerButton isOpen={isOpen} onClick={handleClick} />
          <div className="hidden space-x-6 lg:inline-block p-5">
            <NavLinks />
          </div>
          <MobileMenu isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
