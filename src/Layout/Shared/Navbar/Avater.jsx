import { createContext } from "react";
import avater from "../../../images/placeholder.jpg";
import { AuthContext } from "../../../Provider/AuthProvider";
const Avater = () => {
  const { user } = createContext(AuthContext);
  return (
    <img
      src={user && user.photoURL ? user.photoURL : avater}
      alt="profile image demo"
      className="rounded-full"
      width={20}
      height={30}
    />
  );
};

export default Avater;
