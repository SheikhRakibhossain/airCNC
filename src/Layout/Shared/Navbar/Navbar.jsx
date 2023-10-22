import Container from "../Container/Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed bg-white z-10 shadow-sm">
        <div className="border-b-[-1px] py-4">
          <Container>
            <div className="flex flex-row justify-between items-center md:gap-0 gap-3">
                <div className="hidden md:block"><Logo/></div>
                <div><Search/></div>
                <div><MenuDropdown/></div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
