import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const NotFound = () => {
  useLogin();
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center justify-center flex-col h-screen flex items-center center text-xl">
        Page Not Found
        <span
          onClick={() => navigate(-1)}
          className="text-sky-500 cursor-pointer hover:underline">
          Kembali
        </span>
      </div>
    </>
  );
};

export default NotFound;
