import { Box, Grid, Stack, Typography, Zoom } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./movieCardStyles";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
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
          backgroundImage: `url(https://image.tmdb.org/t/p/w200${movieDetails.poster_path})`,
        }}
      >
        <Stack
          direction="row"
          sx={{
            backgroundImage: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5), rgba(0,0,0,0))",
            color: "white",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">{movieDetails.vote_average}</Typography>
          <StarRateRoundedIcon sx={{ color: "#FFD700" }} />
        </Stack>
      </Grid>
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
