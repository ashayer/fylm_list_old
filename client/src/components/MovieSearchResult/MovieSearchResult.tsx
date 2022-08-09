import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import PosterFallback from "../../assets/no_poster_fallback.svg";
const MovieSearchResult = ({ movieDetails }: { movieDetails: MoviePopular }) => {
  return (
    <Grid
      item
      container
      direction="column"
      sx={{ border: "1px solid red", marginInline: "auto", height: "150px", mb: 10 }}
    >
      <Grid
        item
        sx={{
          height: "150px",
          width: "100px",
          backgroundImage:
            movieDetails.poster_path !== null
              ? `url(https://image.tmdb.org/t/p/w200${movieDetails.poster_path})`
              : `url(${PosterFallback})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#DBDBDB",
          border: "1px solid red",
        }}
      />
      <Grid item container direction="column">
        <Grid item sx={{ border: "1px solid red" }}>
          <Typography variant="h6" fontWeight="bold">
            {movieDetails.title}
          </Typography>
        </Grid>
        <Grid item sx={{ border: "1px solid red" }}>
          <Typography fontWeight="bold">{movieDetails.overview}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieSearchResult;
