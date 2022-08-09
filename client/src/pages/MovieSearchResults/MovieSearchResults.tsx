import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { Grid } from "@mui/material";
import tempSearch from "./temp";
import MovieSearchResult from "../../components/MovieSearchResult/MovieSearchResult";
// const searchForMovie = async (searchText: string) => {
//   if (searchText !== "") {
//     const encoded = encodeURI(searchText);
//     const response = await axios.get(`/api/movie/searchMovie/${encoded}`);
//     return response.data;
//   }
// };

const MovieSearchResults = () => {
  const { searchText } = useParams();

  // const { data, isLoading, isSuccess, isError } = useQuery(
  //   ["movie-search"],
  //   () => searchForMovie(searchText ?? ""),
  //   { keepPreviousData: true },
  // );

  // console.log(data);
  // if (isLoading) return <Loading />;
  // if (isError) return <Error />;

  const data: MoviePopular[] = tempSearch;
  // return (
  //   <Grid item container xs={11} sx={{ marginInline: "auto" }}>
  //     {isSuccess &&
  //       !isLoading &&
  //       data.results.map((movieDetails: MoviePopular) => {
  //         console.log(movieDetails);
  //         return <div>{movieDetails.id}</div>;
  //       })}
  //   </Grid>
  // );

  return (
    <Grid item container direction="column" xs={11} sx={{ marginInline: "auto" }}>
      {data.map((movieDetails: MoviePopular) => {
        return <MovieSearchResult key={movieDetails.id} movieDetails={movieDetails} />;
      })}
    </Grid>
  );
};

export default MovieSearchResults;
