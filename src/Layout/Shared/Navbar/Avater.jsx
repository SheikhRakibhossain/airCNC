import {  useContext } from "react";
import avater from "../../../images/placeholder.jpg";
import { AuthContext } from "../../../Provider/AuthProvider";
const Avater = () => {
  const { user } = useContext(AuthContext);
  return (
   <>
    <img
      src={user && user.photoURL?user.photoURL:avater}
      alt="profile image"
      className="rounded-full"
      width={30}
      height={30}
    />
   </>
  );
};

export default Avater;
