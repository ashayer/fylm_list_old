import { Box, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";
import { useNavigate, useParams } from "react-router-dom";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import { useQuery } from "@tanstack/react-query";
import LikedMoviesGrid from "../../components/LikedMovieGrid/LikedMoviesGrid";

const getUserMovieLikes = async (username: any) => {
  try {
    const response = await axios.get(`/api/user/getUserMovieLikes/${username}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const AccountPage = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();
  let { username }: any = useParams();

  const {
    data: userMovieLikes,
    isSuccess,
    isLoading,
  } = useQuery(["user-likes", username], () => getUserMovieLikes(username), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <Box>
      {isSuccess && !isLoading && (
        <LikedMoviesGrid userMovieLikes={userMovieLikes} username={username} />
      )}
    </Box>
  );
};

export default AccountPage;
