import { Box, Grid, Typography, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./movieCardStyles";

const MovieCard = ({ movieDetails }: { movieDetails: MoviePopular }) => {
  const navigate = useNavigate();
  return (
    <Zoom in>
      <Grid
        container
        item
        sx={{ ...styles.movieCardContainer }}
        onClick={() => navigate(`/movie/${movieDetails.id}`)}
      >
        <Grid
          item
          sx={{
            ...styles.movieCardBackground,
            backgroundImage: `url(https://image.tmdb.org/t/p/w200${movieDetails.poster_path})`,
          }}
        />
        <Typography sx={{ ...styles.movieCardText }}>
          <strong>{movieDetails.title}</strong>
        </Typography>
        <Typography sx={{ ...styles.movieCardText }}>
          <strong>{movieDetails.release_date}</strong>
        </Typography>
      </Grid>
    </Zoom>
  );
};

export default MovieCard;
