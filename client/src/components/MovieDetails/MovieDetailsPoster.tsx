import { Grid, Typography, IconButton, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./movieDetailStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useUserStore from "../../stores/userStore";
import produce from "immer";
import useAuthStore from "../../stores/authStore";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const MOVIE_DB_POSTER = "https://image.tmdb.org/t/p/w500";

const getUserMovieLikes = async (username: any) => {
  const response = await axios.get(`/api/user/getUserMovieLikes/${username}`);
  return response.data;
};

const MovieDetailsPoster = ({ movieDetails }: { movieDetails: MovieDetails }) => {
  const userId = useAuthStore((state) => state.id);
  const username = useAuthStore((state) => state.username);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const setUserMovieLikes = useUserStore((state) => state.setUserMovieLikes);
  const addMovieToLikedList = () => {
    const addedMovieList = produce<any>(userMovieLikes, (draft) => {
      draft.push(movieDetails.id);
    });
    setUserMovieLikes(addedMovieList);
    updateUserMovieLikes(addedMovieList);
    refetch();
  };

  const removeMovieFromLikedList = () => {
    const removedMovieList = produce<any>(userMovieLikes, (draft) => {
      const index = draft.findIndex((id: number) => id === movieDetails.id);
      if (index !== -1) draft.splice(index, 1);
    });
    setUserMovieLikes(removedMovieList);
    updateUserMovieLikes(removedMovieList);
    refetch();
  };

  const updateUserMovieLikes = async (updatedMovieList: string[]) => {
    try {
      const response = await axios.patch(`/api/user/likeMovie/${userId}`, { updatedMovieList });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isSuccess, isLoading, isError, refetch, isRefetching } = useQuery(
    ["user-likes", username],
    () => getUserMovieLikes(username),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Grid
      item
      container
      sx={{ marginInline: "auto", alignItems: "center" }}
      direction="column"
      xs={12}
      sm={5}
      md={4}
      lg={3}
    >
      <Grid
        item
        sx={{
          ...styles.movieDetailsPoster,
          backgroundImage: `url(${MOVIE_DB_POSTER}${movieDetails.poster_path})`,
        }}
      >
        {isLoading || isRefetching ? (
          <CircularProgress />
        ) : data.includes(movieDetails.id as never) && isSuccess ? (
          <IconButton sx={{ color: "red" }} onClick={removeMovieFromLikedList}>
            <FavoriteIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton sx={{ color: "white" }} onClick={addMovieToLikedList}>
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        )}
      </Grid>
      <Grid item>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          {movieDetails.runtime}m
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {movieDetails.release_date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MovieDetailsPoster;
