import React from "react";
import { useQuery, useQueries, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";

const getMovieDetails = async (movieId: number) => {
  const response = await axios.get(`/api/movie/getMovie/${movieId}`);
  return response.data;
};

const LikedMoviesGrid = ({
  userMovieLikes,
  username,
}: {
  userMovieLikes: number[];
  username: string;
}) => {
  const queryList = userMovieLikes.map((movieId: number) => {
    return {
      queryKey: ["movie-details", movieId],
      queryFn: () => getMovieDetails(movieId),
    };
  });

  const results: UseQueryResult<MoviePopular>[] = useQueries({ queries: queryList });
  return (
    <Grid item container xs={11} sx={{ marginInline: "auto" }}>
      <Typography variant="h2" fontWeight="bold">
        {username}'s Liked Movies
      </Typography>
      <Grid
        container
        item
        sx={{
          justifyContent: "start",
        }}
        xs={10}
      >
        {results.map((queryResult: UseQueryResult<MoviePopular>) => {
          return (
            queryResult.isSuccess && (
              <MovieCard movieDetails={queryResult.data} key={queryResult.data.id} />
            )
          );
        })}
      </Grid>
    </Grid>
  );
};

export default LikedMoviesGrid;

// const results = useQueries(
//   saleBundles.map((bundle) => {
//     return {
//       queryKey: ["SaleBundle", bundle.id],
//       queryFn: async () => await fetchData(bundle, bundleTypes.sale),
//     };
//   }),
// );
