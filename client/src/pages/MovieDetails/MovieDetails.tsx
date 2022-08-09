import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useUserStore from "../../stores/userStore";
import produce from "immer";
import useAuthStore from "../../stores/authStore";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CastCard from "../../components/CastCard/CastCard";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MovieDetailsOverview from "../../components/MovieDetails/MovieDetailsOverview";
import MovieDetailsPoster from "../../components/MovieDetails/MovieDetailsPoster";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const getMovieDetails = async (movieId: string) => {
  const response = await axios.get(`/api/movie/getMovie/${movieId}`);
  return response.data;
};

const getMovieCast = async (movieId: string) => {
  const response = await axios.get(`/api/movie/getCast/${movieId}`);
  return response.data;
};

type MovieDetailsParams = {
  movieId: string;
};

const MovieDetails = () => {
  let { movieId } = useParams<MovieDetailsParams>();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.isUser);

  const {
    data: movieDetails,
    isSuccess: movieSuccess,
    isLoading: movieLoading,
    isError: movieError,
  } = useQuery(["movie-details", movieId], () => getMovieDetails(movieId as string), {
    keepPreviousData: true,
  });
  const {
    data: castDetails,
    isSuccess: castSuccess,
    isLoading: castLoading,
  } = useQuery(["cast-details", movieId], () => getMovieCast(movieId as string), {
    keepPreviousData: true,
  });
  const [castLength, setCastLength] = useState<number>(15);
  const loadMoreCast = () => {
    setCastLength((old) => old + 10);
  };

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  if (movieLoading) return <Loading />;
  if (movieError) return <Error />;

  return (
    <Box>
      {movieSuccess && castSuccess && (
        <Grid item container sx={{ marginInline: "auto", mt: 5 }} xs={11} lg={10}>
          <MovieDetailsPoster movieDetails={movieDetails} />
          <MovieDetailsOverview movieDetails={movieDetails} />
          <Grid container sx={{ mt: 5 }}>
            <Grid item sx={{ borderBottom: "1px solid black" }}>
              <Typography variant="h3" sx={{ width: "80vw" }}>
                <strong>CAST</strong>
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                marginTop: 1,
                overflowX: "scroll",
                flexDirection: "row",
                display: "flex",
              }}
            >
              {castDetails.slice(0, castLength).map((castMember: CastDetails) => {
                return <CastCard key={castMember.id} castMember={castMember} />;
              })}
              <IconButton
                sx={{ borderRadius: "0px", width: "20px" }}
                onClick={() => loadMoreCast()}
              >
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetails;
