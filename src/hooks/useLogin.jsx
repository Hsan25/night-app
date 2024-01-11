import { useState, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
const useLogin = () => {
  const [username, setUsername] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setUsername(user.username);
      // navigate(-1);
    } else {
      navigate("/signin");
    }
  }, []);

  return username;
};

export default useLogin;
