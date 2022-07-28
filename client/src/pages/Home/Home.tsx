import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

const Home = () => {
  return (
    <Box sx={{ border: "1px solid white" }}>
      <MovieCarousel />
      <MoviesGrid />
    </Box>
  );
};

export default Home;
