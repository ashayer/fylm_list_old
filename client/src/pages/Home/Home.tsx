import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import useStore from "../../stores/authStore";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPopularMovies = async () => {
  const response = await axios.get("/api/movie/getPopular", { params: { page: 1 } });
  return response.data.results;
};

const Home = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.isUser);
  const { data, status } = useQuery(["popular-movies"], getPopularMovies);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  if (status === "loading") return <CircularProgress></CircularProgress>;
  if (status === "error") return <Box>Error...</Box>;

  return (
    <Box>
      <Box>{data.length > 0 && <MovieCarousel movieList={data} />}</Box>
      <Box>{data.length > 0 && <MovieGrid movieList={data} />}</Box>
    </Box>
  );
};

export default Home;
