import { Box, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import { useQuery } from "@tanstack/react-query";
import LikedMoviesGrid from "../../components/LikedMovieGrid/LikedMoviesGrid";

const getUserMovieLikes = async (userId: any) => {
  try {
    const response = await axios.get(`/api/user/getUserMovieLikes/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const AccountPage = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();
  const userId = useAuthStore((state) => state.id);

  const {
    data: userMovieLikes,
    isSuccess,
    isLoading,
  } = useQuery(["user-likes", userId], () => getUserMovieLikes(userId), {
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  return (
    <Box>{isSuccess && !isLoading && <LikedMoviesGrid userMovieLikes={userMovieLikes} />}</Box>
  );
};

export default AccountPage;
