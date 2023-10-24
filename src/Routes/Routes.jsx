import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "room/:id", element:<RoomDetails/>},
  ],
  },

  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
]);
