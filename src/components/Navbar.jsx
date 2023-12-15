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
    <nav className="fixed top-0 inset-x-0 bg-gradient-to-br z-40 from-slate-700 to-slate-800 flex justify-between items-center py-4 px-14 sm:px-5 ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logo cursor-pointer font-medium text-white text-3xl sm:text-2xl">
        <span>Night</span>
      </div>

      <div
        id="navbar"
        className={
          isActive
            ? "nav-fixed flex md:justify-normal md:pt-10 md:bg-slate-800 md:-right-96 md:h-screen md:-bottom-[100vh] md:absolute md:flex-col items-center justify-between sm:!w-[60%] md:w-[40%] w-[80%]"
            : "transition-all duration-150 ease-out flex md:justify-normal md:pt-10 md:bg-slate-800 md:-right-96 md:h-screen md:-bottom-[100vh] md:absolute md:flex-col items-center justify-between sm:!w-[60%] md:w-[40%] w-[80%]"
        }>
        <ul className="flex md:flex-col duration-1000 transition  gap-4">
          <li>
            <NavLink
              to={"/"}
              aria-current={"page"}
              className="text-slate-300 text-xl hover:border-b-2 border-sky-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/anime"}
              className="text-slate-300 text-xl hover:border-b-2 border-sky-500">
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/manga"}
              className="text-slate-300 text-xl hover:border-b-2 border-sky-500">
              Manga
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-5 md:pt-10 items-center">
          <div className="md:hidden">
            <InputSearch showSearch={showSearch} />
          </div>
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

      {type ? (
        <div
          onClick={() => setShowSearch(!showSearch)}
          className="ml-auto mr-6 cursor-pointer p-[2px] px-[6px] hidden md:block bg-slate-600 rounded-full">
          <Search width={18} />
        </div>
      ) : (
        ""
      )}

      <div
        className={`${
          showSearch
            ? "absolute  mx-auto left-1/2 -translate-x-1/2 -bottom-[100%] md:flex hidden"
            : "hidden"
        } `}>
        <InputSearch showSearch={showSearch} />
      </div>

      <Hamburger handleActive={handleActive} isActive={isActive} />
    </nav>
  );
};

export default Navbar;
