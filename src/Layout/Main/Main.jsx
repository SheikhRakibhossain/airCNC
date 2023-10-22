import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet/>
      </div>
      
      
    </>
  );
};

export default Main;
