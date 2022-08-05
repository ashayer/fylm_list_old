import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { tempMovieDetail } from "./tempDetails";
import { tempCast } from "./tempCast";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CastCard from "../CastCard/CastCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useUserStore from "../../stores/userStore";
import produce from "immer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useAuthStore from "../../stores/authStore";

const getMovieDetails = async (movieId: any) => {
  try {
    const response = await axios.get(`/api/movie/getMovie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieCast = async (movieId: any) => {
  try {
    const response = await axios.get(`/api/movie/getCast/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const MovieDetails = ({ movieData }: any) => {
  let { movieId }: any = useParams();
  const userId = useAuthStore((state) => state.id);
  const userMovieLikes = useUserStore((state) => state.userMovieLikes);
  const setUserMovieLikes = useUserStore((state) => state.setUserMovieLikes);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>(tempMovieDetail);
  const [castDetails, setCastDetails] = useState<CastDetails[]>(tempCast);
  const [movieIsLiked, setMovieIsLiked] = useState<boolean>(false);

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

  useEffect(() => {
    // getMovieDetails(movieId).then((details: any) => {
    //   setMovieDetails(details);
    // });
    // getMovieCast(movieId).then((castList: any) => {
    //   const minLength = Math.min(castList.length, 10);
    //   setCastDetails(castList.slice(0, minLength));
    // });
    checkIfMovieIsLiked();
  }, [movieId]);

  return (
    <Box>
      {movieDetails && castDetails && (
        <Grid item container sx={{ width: "80vw", marginInline: "auto" }}>
          <Grid
            item
            sx={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
              mr: 1,
              mt: 5,
            }}
            height="375px"
            width="250px"
          />

          <Grid item container direction="column" xs={8}>
            <Grid item sx={{}}>
              <Typography variant="h3">
                <strong>{movieDetails.title} (2022)</strong>
              </Typography>
            </Grid>
            <Grid item>
              {movieIsLiked ? (
                <IconButton sx={{ color: "red" }} onClick={removeMovieFromLikedList}>
                  <FavoriteIcon />
                </IconButton>
              ) : (
                <IconButton sx={{ color: "black" }} onClick={addMovieToLikedList}>
                  <FavoriteBorderIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item>
              <Stack direction="row">
                <Chip
                  label="PG-13"
                  sx={{
                    backgroundColor: "black",
                    fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "5px",
                    m: 1,
                  }}
                />
                <Chip
                  label="Adventure"
                  sx={{
                    backgroundColor: "#E8E8E8",
                    color: "black",
                    borderRadius: "5px",
                    m: 1,
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                />
                <Chip
                  label="Action"
                  sx={{
                    backgroundColor: "#E8E8E8",
                    color: "black",
                    borderRadius: "5px",
                    m: 1,
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                />
                <Chip
                  label="Fantasy"
                  sx={{
                    backgroundColor: "#E8E8E8",
                    color: "black",
                    borderRadius: "5px",
                    m: 1,
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                />
              </Stack>
            </Grid>
            <Grid
              item
              container
              sx={{
                p: 1,
                justifyContent: "space-between",
                alignItems: "end",
                borderBottom: "1px solid black",
              }}
            >
              <Grid item sx={{ flexGrow: 1, pt: 1, pb: 1 }}>
                <Typography variant="h4">
                  <strong>Synopsis</strong>
                </Typography>
              </Grid>

              <Grid item sx={{ p: 1 }}>
                <Typography variant="h4">
                  {(movieDetails.vote_average / 2).toFixed(1)} out of 5
                </Typography>
              </Grid>

              <Grid item sx={{ p: 1 }}>
                <Rating
                  size="large"
                  name="read-only"
                  value={parseFloat((movieDetails.vote_average / 2).toFixed(1))}
                  precision={0.5}
                  readOnly
                />
              </Grid>
            </Grid>
            <Grid item sx={{ pt: 1, pb: 2 }}>
              <Typography variant="h6">
                <strong>{movieDetails.overview}</strong>
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={2}
            spacing={5}
            sx={{ p: 5, textAlign: "center" }}
            order={{ xs: 1, sm: 0 }}
          >
            <Grid item>
              <Typography sx={{}} variant="h5">
                <strong>RUNTIME</strong>
              </Typography>
              <Typography sx={{}} variant="h5">
                {movieDetails.runtime}m
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{}} variant="h5">
                <strong>RELEASE DATE</strong>
              </Typography>
              <Typography sx={{}} variant="h5">
                {movieDetails.release_date}
              </Typography>
            </Grid>
          </Grid>
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
              {castDetails.map((castMember: CastDetails) => {
                return <CastCard key={castMember.id} castMember={castMember} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetails;
