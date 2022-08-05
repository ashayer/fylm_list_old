import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";


const getUserMovieLikes = async ({ userId }: any) => {
  try {
    const response = await axios.get(`/api/user/getUserMovieLikes/${userId}`);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
const AccountPage = () => {
  const userId = useAuthStore((state) => state.id);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const userFriends = useUserStore((state) => state.userFriends);

  return (
    <Box>
      <Button onClick={() => getUserMovieLikes({ userId })} variant="contained">
        Get Likes
      </Button>
      <Box>
        {userMovieLikes && userMovieLikes.map((movieId) => <Typography>{movieId}</Typography>)}
      </Box>
    </Box>
  );
};

export default AccountPage;
