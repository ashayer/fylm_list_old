import { Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import styles from "./movieDetailStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MOVIE_DB_POSTER = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPoster = ({
  movieDetails,
  removeMovieFromLikedList,
  addMovieToLikedList,
  movieIsLiked,
}: {
  movieDetails: MovieDetails;
  removeMovieFromLikedList: any;
  addMovieToLikedList: any;
  movieIsLiked: boolean;
}) => {
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
