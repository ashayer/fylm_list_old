import { Box, CircularProgress, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import useStore from "../../stores/authStore";
import axios from "axios";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import MovieCard from "../../components/MovieCard/MovieCard";

const getPopularMovies = async ({ pageParam = 1 }: QueryFunctionContext) => {
  const response = await axios.get(`/api/movie/getPopular/${pageParam}`);
  return response.data.results;
};

const Home = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.isUser);
  const { data, isLoading, isError, fetchNextPage, isSuccess } = useInfiniteQuery(
    ["popular-movies"],
    getPopularMovies,
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    },
  );

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Box>Error...</Box>;

  return (
    <>
      {isSuccess && (
        <>
          <MovieCarousel movieList={data.pages[0]} />
          <MovieGrid data={data} />
          <Button
            variant="contained"
            sx={{ width: "100%", height: "100px" }}
            onClick={() => fetchNextPage()}
          >
            Load next
          </Button>
        </>
      )}
    </>
  );
};

export default Home;
