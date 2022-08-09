import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import { Grid, IconButton, TextField } from "@mui/material";
import tempSearch from "./temp";
import MovieSearchResult from "../../components/MovieSearchResult/MovieSearchResult";
import SearchIcon from "@mui/icons-material/Search";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  movieSearch: yup.string(),
});
const searchForMovie = async (searchText: string) => {
  if (searchText !== "") {
    const encoded = encodeURI(searchText);
    const response = await axios.get(`/api/movie/searchMovie/${encoded}`);
    return response.data;
  }
};

const MovieSearchResults = () => {
  const formik = useFormik({
    initialValues: {
      movieSearch: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      refetch();
    },
  });
  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    ["movie-search"],
    () => searchForMovie(formik.values.movieSearch ?? ""),
    { keepPreviousData: true, enabled: false },
  );

  return (
    <Grid item container xs={10} xl={8} direction="column" sx={{ marginInline: "auto" }}>
      <Grid item sx={{ mt: 2, mb: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="movieSearch"
            name="movieSearch"
            variant="standard"
            autoComplete="true"
            placeholder="Search For Movie"
            value={formik.values.movieSearch}
            onChange={formik.handleChange}
            InputProps={{
              startAdornment: (
                <IconButton onClick={() => formik.handleSubmit()}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </form>
      </Grid>
      {isSuccess &&
        !isLoading &&
        data.results.map((movieDetails: MoviePopular) => {
          return (
            <MovieSearchResult
              key={movieDetails.id}
              movieDetails={movieDetails}
              isLoading={isLoading}
              isError={isError}
            />
          );
        })}
    </Grid>
  );
};

export default MovieSearchResults;
