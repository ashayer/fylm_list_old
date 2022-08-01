import { Box, Button, Typography } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import useStore from "../../store";
import testData from "./temp";

//! remove comment for function call
const getPopularMovies = async ({ page }: { page: number }) => {
  try {
    const response = await axios.get("/api/movie/getPopular", { params: { page } });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.isUser);
  const [movieList, setMovieList] = useState<MoviePopular[]>(testData);

  useEffect(() => {
    if (!user) navigate("/login");
    else {
      // getPopularMovies().then((movies) => {
      //   console.log(movies);
      //   setMovieList(movies);
      // });
    }
  }, [navigate, user]);

  return (
    <Box>
      <Box>{movieList.length > 0 && <MovieCarousel movieList={movieList} />}</Box>
      <Box>{movieList.length > 0 && <MovieGrid movieList={movieList} />}</Box>
    </Box>
  );
};

export default Home;
