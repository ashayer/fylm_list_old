import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import MovieGrid from "../../components/MoviesGrid/MoviesGrid";
import useAuthStore from "../../stores/authStore";
import axios from "axios";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

const getPopularMovies = async ({ pageParam = 1 }: QueryFunctionContext) => {
  const response = await axios.get(`/api/movie/getPopular/${pageParam}`);
  return response.data.results;
};

const Home = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.isUser);
  const { data, isLoading, isError, fetchNextPage, isSuccess } = useInfiniteQuery(
    ["popular-movies"],
    getPopularMovies,
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
      enabled: user,
    },
  );

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Box>Error...</Box>;

  return (
    <>
      {isSuccess && user && !isLoading && (
        <>
          <MovieCarousel movieList={data.pages[0]} />
          <MovieGrid data={data} fetchNextPage={fetchNextPage} />
        </>
      )}
    </>
  );
};

export default Home;
