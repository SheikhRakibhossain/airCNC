import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet/>
      </div>
      <Footer/>
      
      
    </>
  );
};

export default Main;
