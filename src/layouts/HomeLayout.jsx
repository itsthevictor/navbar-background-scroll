import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
export default HomeLayout;
