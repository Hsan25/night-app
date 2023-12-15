import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const NotFound = () => {
  useLogin();
  return (
    <>
      <div className="text-center justify-center flex-col h-screen flex items-center center text-xl">
        Page Not Found
        <Link to={"/"}>
          <span className="text-sky-500 hover:underline">Kembali</span>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
