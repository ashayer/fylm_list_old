import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const getMovieDetails = async (movieId: any) => {
  try {
    const response = await axios.get(`/api/movie/getMovie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const MovieDetails = ({ movieData }: any) => {
  let { movieId }: any = useParams();

  let [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    getMovieDetails(movieId).then((details: any) => {
      setMovieDetails(details);
    });
  }, [movieId]);

  return (
    <Box>
      {movieDetails && (
        <Grid container>
          <Typography>{movieDetails.title}</Typography>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          />
          <Typography>{movieDetails.tagline}</Typography>
          <Typography>{movieDetails.overview}</Typography>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
          />
          <Typography>{movieDetails.release_date}</Typography>
          <Typography>{movieDetails.runtime}</Typography>
          <Typography>{movieDetails.vote_average}</Typography>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetails;
