import { Grid, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./movieDetailStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useUserStore from "../../stores/userStore";
import produce from "immer";
import useAuthStore from "../../stores/authStore";
import axios from "axios";

const MOVIE_DB_POSTER = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPoster = ({ movieDetails }: { movieDetails: MovieDetails }) => {
  const [movieIsLiked, setMovieIsLiked] = useState<boolean>(false);
  const userId = useAuthStore((state) => state.id);

  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const setUserMovieLikes = useUserStore((state) => state.setUserMovieLikes);
  const addMovieToLikedList = () => {
    const addedMovieList = produce<any>(userMovieLikes, (draft) => {
      draft.push(movieDetails.id);
    });
    setUserMovieLikes(addedMovieList);
    setMovieIsLiked(!movieIsLiked);
    updateUserMovieLikes(addedMovieList);
  };

  const removeMovieFromLikedList = () => {
    const removedMovieList = produce<any>(userMovieLikes, (draft) => {
      const index = draft.findIndex((id: number) => id === movieDetails.id);
      if (index !== -1) draft.splice(index, 1);
    });
    setUserMovieLikes(removedMovieList);
    setMovieIsLiked(!movieIsLiked);
    updateUserMovieLikes(removedMovieList);
  };

  const checkIfMovieIsLiked = () => {
    const isLiked = userMovieLikes.includes(movieDetails.id as never);
    setMovieIsLiked(isLiked);
  };

  const updateUserMovieLikes = async (updatedMovieList: string[]) => {
    try {
      const response = await axios.patch(`/api/user/likeMovie/${userId}`, { updatedMovieList });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserMovieLikes = async () => {
    try {
      const response = await axios.get(`/api/user/getUserMovieLikes/${userId}`);
      setUserMovieLikes(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getUserMovieLikes();
    checkIfMovieIsLiked();
  }, []);

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
        {movieIsLiked ? (
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
        <Typography sx={{}} variant="h5">
          {movieDetails.runtime}m
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">{movieDetails.release_date}</Typography>
      </Grid>
    </Grid>
  );
};

export default MovieDetailsPoster;
