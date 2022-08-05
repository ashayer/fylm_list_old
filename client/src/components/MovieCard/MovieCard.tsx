import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const MovieCard = ({ movieDetails }: { movieDetails: MoviePopular }) => {
  const navigate = useNavigate();

  return (
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
          backgroundImage: `url(https://image.tmdb.org/t/p/w200/${movieDetails.poster_path})`,
        }}
      ></Grid>
      <Typography sx={{ ...styles.movieCardText }}>
        <strong>{movieDetails.title}</strong>
      </Typography>
      <Typography sx={{ ...styles.movieCardText }}>
        <strong>{movieDetails.release_date}</strong>
      </Typography>
    </Grid>
  );
};

export default MovieCard;

// sx={{
//   backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   color: "white",
//   justifyContent: "end",
// }}
