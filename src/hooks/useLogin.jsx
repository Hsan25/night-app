import { useState, useEffect } from "react";
import { redirect , useNavigate } from "react-router-dom";
const useLogin = () => {
  const [username, setUsername] = useState("");
  const user = localStorage.getItem("username");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (user) {
      setUsername(user);
      redirect("/");
    } else {
      navigate("/signin");
    }
  }, []);

  return username;
};

export default useLogin;
