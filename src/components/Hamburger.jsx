const Hamburger = ({ isActive, handleActive }) => {
  return (
    <>
      <div
        id="hamburger"
        onClick={() => handleActive()}
        className="w-[25px] flex md:hidden h-[26px] cursor-pointer flex-col gap-1">
        <span
          className={
            isActive
              ? "hamburger-active hamburger-line origin-top-left duration-100 transition"
              : "hamburger-line origin-top-left duration-100 transition"
          }></span>
        <span
          className={
            isActive ? "hamburger-active hamburger-line" : "hamburger-line"
          }></span>
        <span
          className={
            isActive
              ? "hamburger-active hamburger-line origin-bottom-left duration-100 transition"
              : "hamburger-line origin-bottom-left duration-100 transition"
          }></span>
      </div>
    </>
  );
};

export default Hamburger;
