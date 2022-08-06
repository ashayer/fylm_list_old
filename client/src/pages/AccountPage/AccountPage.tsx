import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";


const AccountPage = () => {
  const userId = useAuthStore((state) => state.id);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const userFriends = useUserStore((state) => state.userFriends);

  return (
    <Box>

    </Box>
  );
};

export default AccountPage;