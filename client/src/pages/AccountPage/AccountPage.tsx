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

const getUserMovieLikes = async (username: string) => {
  const response = await axios.get(`/api/user/getUserMovieLikes/${username}`);
  return response.data;
};

type AccountParams = {
  username: string;
};

const AccountPage = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();
  let { username } = useParams<AccountParams>();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const { data, isSuccess, isLoading, isError } = useQuery(
    ["user-likes", username],
    () => getUserMovieLikes(username as string),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Box>
      {isSuccess && !isError && (
        <LikedMoviesGrid userMovieLikes={data} username={username as string} />
      )}
    </Box>
  );
};

export default AccountPage;
