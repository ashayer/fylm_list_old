import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CastCard from "../CastCard/CastCard";
import useUserStore from "../../stores/userStore";
import produce from "immer";
import useAuthStore from "../../stores/authStore";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MovieDetailsOverview from "./MovieDetailsOverview";
import MovieDetailsPoster from "./MovieDetailsPoster";

const getMovieDetails = async (movieId: string) => {
  const response = await axios.get(`/api/movie/getMovie/${movieId}`);
  return response.data;
};

const getMovieCast = async (movieId: string) => {
  const response = await axios.get(`/api/movie/getCast/${movieId}`);
  return response.data;
};

const MovieDetails = ({ movieData }: any) => {
  let { movieId }: any = useParams();
  const userId = useAuthStore((state) => state.id);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const setUserMovieLikes = useUserStore((state) => state.setUserMovieLikes);
  const { data: movieDetails, isSuccess: movieSuccess } = useQuery(
    ["movie-details", movieId],
    () => getMovieDetails(movieId),
    {
      keepPreviousData: true,
    },
  );
  const { data: castDetails, isSuccess: castSuccess } = useQuery(
    ["cast-details", movieId],
    () => getMovieCast(movieId),
    {
      keepPreviousData: true,
    },
  );
  const [movieIsLiked, setMovieIsLiked] = useState<boolean>(false);
  const [castLength, setCastLength] = useState<number>(15);
  const addMovieToLikedList = () => {
    const addedMovieList = produce<any>(userMovieLikes, (draft) => {
      draft.push(movieId);
    });
    setUserMovieLikes(addedMovieList);
    setMovieIsLiked(!movieIsLiked);
    updateUserMovieLikes(addedMovieList);
  };

  const removeMovieFromLikedList = () => {
    const removedMovieList = produce<any>(userMovieLikes, (draft) => {
      const index = draft.findIndex((id: string) => id === movieId);
      if (index !== -1) draft.splice(index, 1);
    });
    setUserMovieLikes(removedMovieList);
    setMovieIsLiked(!movieIsLiked);
    updateUserMovieLikes(removedMovieList);
  };

  const checkIfMovieIsLiked: any = () => {
    const isLiked = userMovieLikes.includes(movieId as never);
    setMovieIsLiked(isLiked);
  };

  const updateUserMovieLikes = async (updatedMovieList: any) => {
    try {
      const update = await axios.patch(`/api/user/likeMovie/${userId}`, { updatedMovieList });
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreCast = () => {
    setCastLength((old) => old + 10);
  };

  useEffect(() => {
    checkIfMovieIsLiked();
  });

  return (
    <Box>
      {movieSuccess && castSuccess && (
        <Grid item container sx={{ marginInline: "auto", mt: 5 }} xs={11} lg={10}>
          <MovieDetailsPoster
            movieDetails={movieDetails}
            movieIsLiked={movieIsLiked}
            removeMovieFromLikedList={removeMovieFromLikedList}
            addMovieToLikedList={addMovieToLikedList}
          />
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
