import { Search } from "react-feather";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import InputSearch from "./inputSearch";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const nav = useRef();
  const btn = useRef();
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  useEffect(() => {
    window.addEventListener("click", (e) => {
      nav.current = document.querySelector("#navbar");
      btn.current = document.querySelector("#hamburger");
      if (!nav.current.contains(e.target) && !btn.current.contains(e.target)) {
        setIsActive(false);
      }

      if (btn.current.contains(e.target)) {
        setShowSearch(false);
      }
    });
  }, []);

  isActive
    ? document.body.classList.add("freeze")
    : document.body.classList.remove("freeze");

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="fixed top-0  inset-x-0 bg-gradient-to-br z-40 from-slate-700 to-slate-800 flex justify-between items-center p-5  md:px-10 lg:px-14 ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logo cursor-pointer font-medium text-white text-2xl ">
        <span>Night</span>
      </div>

      <div
        id="navbar"
        className={
          isActive
            ? "nav-fixed flex tems-center justify-between"
            : "transition-all duration-150 pl-20 w-full ease-out flex items-center justify-between"
        }>
        <ul
          className={`flex ${
            isActive ? "right-0" : "-right-full"
          } items-center pt-12 ml-auto md:w-full  duration-300 md:static md:flex-row md:h-full md:pt-0 md:bg-transparent transition-all flex-col w-[70%] sm:w-[40%] bg-slate-800 h-screen absolute top-full gap-4`}>
          <li>
            <NavLink to={"/"} className="nav-list">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/anime"} className="nav-list ">
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink to={"/manga"} className="nav-list ">
              Manga
            </NavLink>
          </li>
          <li>
            <NavLink to={"/quotes"} className="nav-list ">
              Quotes
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-5 md:pt-10 items-center">
          {/* <div className="flex gap-4 items-center">
            <NavLink
              to={"/signin"}
              className="text-base text-blue-700 hover:text-blue-600 cursor-pointer">
              Sign In
            </NavLink>
            <NavLink
              to={"/signup"}
              className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-md px-3 py-2">
              Sign Up
            </NavLink>
          </div> */}
        </div>
      </div>

      {type && (
        <div
          onClick={() => setShowSearch(!showSearch)}
          className="ml-auto mr-6 md:hidden cursor-pointer p-[2px] px-[6px] bg-slate-600 rounded-full">
          <Search width={18} />
        </div>
      )}

      <div
        className={`${
          showSearch
            ? "absolute md:static mx-auto md:mx-0 left-1/2 -translate-x-1/2 md:-translate-x-0 -bottom-[100%]"
            : "hidden md:block"
        } `}>
        <InputSearch showSearch={showSearch} />
      </div>

      <Hamburger handleActive={handleActive} isActive={isActive} />
    </nav>
  );
};

export default Navbar;
