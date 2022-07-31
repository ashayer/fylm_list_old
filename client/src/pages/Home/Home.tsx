import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store";

const Home = () => {
  const navigate = useNavigate();

  const user = useStore((state) => state.isUser);
  const setUser = useStore((state) => state.setIsUser);

  const onLogout = () => {
    setUser(false);
    navigate("/login");
  };

  useEffect(() => {
    if (!user) navigate("/login");
  });
  return (
    <div>
      <Button onClick={() => onLogout()} variant="contained">
        LOGOUT
      </Button>
    </div>
  );
};

export default Home;
