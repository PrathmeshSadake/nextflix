import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Layout = () => {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to='/signin' replace={true} />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
