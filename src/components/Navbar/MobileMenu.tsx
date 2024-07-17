import NavLinks from "./NavLinks";

interface Props {
  isOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ isOpen }) => (
  <div
    className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
      isOpen ? "block" : "hidden"
    }`}
  >
    <div className="flex flex-col space-y-6">
      <NavLinks />
    </div>
  </div>
);

export default MobileMenu;
