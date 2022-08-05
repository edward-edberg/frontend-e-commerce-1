import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ShareLayout;
