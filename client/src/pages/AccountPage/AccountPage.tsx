import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();

  const userId = useAuthStore((state) => state.id);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const userFriends = useUserStore((state) => state.userFriends);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);
  return <Box></Box>;
};

export default AccountPage;
