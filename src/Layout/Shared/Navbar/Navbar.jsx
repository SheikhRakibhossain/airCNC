import Container from "../Container/Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed bg-white z-10 shadow-sm">
        <div className="border-b-[-1px] py-4">
          <Container>
            <div className="flex flex-row justify-between items-center md:gap-0 gap-3">
                <div><Logo/></div>
                <div>serach</div>
                <div>Menu</div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar;
