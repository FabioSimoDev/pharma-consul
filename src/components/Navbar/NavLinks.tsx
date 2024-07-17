import React from "react";
import { HashLink } from "react-router-hash-link";

interface NavLinksProps {}

const NavLinks: React.FC<NavLinksProps> = () => {
  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-primary"
        smooth
        to="/#home"
      >
        Home
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-primary"
        smooth
        to="/#about"
      >
        Chi siamo
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-primary"
        smooth
        to="/#services"
      >
        Servizi
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-primary"
        to="/#contacts"
      >
        Contatti
      </HashLink>
    </>
  );
};

export default NavLinks;
