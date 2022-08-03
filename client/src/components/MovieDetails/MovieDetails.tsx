import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
import { tempMovieDetail } from "./tempDetails";
import { tempCast } from "./tempCast";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CastCard from "../CastCard/CastCard";

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

  const minLength = Math.min(tempCast.length, 10);
  const [movieDetails, setMovieDetails] = useState<MovieDetails>(tempMovieDetail);

  const [castDetails, setCastDetails] = useState<CastDetails[]>(tempCast.slice(0, minLength));

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  useEffect(() => {
    // getMovieDetails(movieId).then((details: any) => {
    //   setMovieDetails(details);
    //   console.log(details);
    // });
  }, [movieId]);

  return (
    <Box>
      {movieDetails && (
        <Grid container sx={{ width: "80vw", marginInline: "auto" }}>
          <Grid
            item
            sx={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetails.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",

              mt: 5,
            }}
            height="375px"
            width="250px"
          />

          <Grid item container direction="column" sx={{ p: 5 }} xs={8}>
            <Grid item sx={{}}>
              <Typography variant="h3">
                <strong>{movieDetails.title} (2022)</strong>
              </Typography>
            </Grid>

            <Grid item sx={{}}>
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
                pt: 1,
                pb: 1,
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
              <Typography variant="body1">
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
            <Grid item>
              <Typography sx={{}} variant="h5">
                <strong>BUDGET</strong>
              </Typography>
              <Typography sx={{}} variant="h5">
                {formatter.format(movieDetails.budget)}
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
                return <CastCard castMember={castMember} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetails;
