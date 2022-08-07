import { Box, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useAuthStore from "../../stores/authStore";
import useUserStore from "../../stores/userStore";
import { useNavigate, useParams } from "react-router-dom";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import { useQuery } from "@tanstack/react-query";
import LikedMoviesGrid from "../../components/LikedMovieGrid/LikedMoviesGrid";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const getUserMovieLikes = async (username: any) => {
  const response = await axios.get(`/api/user/getUserMovieLikes/${username}`);
  return response.data;
};

const AccountPage = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();
  let { username }: any = useParams();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const { data, isSuccess, isLoading, isError } = useQuery(
    ["user-likes", username],
    () => getUserMovieLikes(username),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Box>
      {isSuccess && !isError && <LikedMoviesGrid userMovieLikes={data} username={username} />}
    </Box>
  );
};

export default AccountPage;
