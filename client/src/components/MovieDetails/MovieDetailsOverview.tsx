import { Grid, Rating, Typography, Chip } from "@mui/material";
import React from "react";
import styles from "./movieDetailStyles";

const MovieDetailsOverview = ({ movieDetails }: { movieDetails: MovieDetails }) => {
  return (
    <Grid item container direction="column" xs={12} sm={12} md={8} lg={9}>
      <Grid item>
        <Typography variant="h3">
          <strong>{movieDetails.title} (2022)</strong>
        </Typography>
      </Grid>

      <Grid item>
        <Chip
          label="PG-13"
          sx={{
            backgroundColor: "black",
            color: "white",
            ...styles.movieDetailsChip,
          }}
        />
        <Chip label="Adventure" sx={{ ...styles.movieDetailsChip }} />
        <Chip label="Action" sx={{ ...styles.movieDetailsChip }} />
        <Chip label="Fantasy" sx={{ ...styles.movieDetailsChip }} />
      </Grid>
      <Grid item container sx={{ alignItems: "end", borderBottom: "1px solid black" }}>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography variant="h4">
            <strong>Synopsis</strong>
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">{(movieDetails.vote_average / 2).toFixed(1)}</Typography>
        </Grid>

        <Grid item>
          <Rating
            size="large"
            value={parseFloat((movieDetails.vote_average / 2).toFixed(1))}
            precision={0.5}
            readOnly
          />
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          <strong>{movieDetails.overview}</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MovieDetailsOverview;
