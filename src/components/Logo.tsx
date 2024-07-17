import React from "react";
import { HashLink } from "react-router-hash-link";

const Logo: React.FC = () => (
  <HashLink smooth to="/#home">
    <img src="https://placehold.co/140x30" alt="logo" />
  </HashLink>
);

export default Logo;
