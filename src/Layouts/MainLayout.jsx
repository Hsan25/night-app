import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useLogin from "../hooks/useLogin";
const MainLayout = ({ children }) => {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const username = useLogin();
  return (
    <>
      <Helmet>
        <title>
          Night - {page ? page.charAt(0).toUpperCase() + page.slice(1) : "Home"}
        </title>
      </Helmet>

      <Navbar />

      <div className="middle min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
