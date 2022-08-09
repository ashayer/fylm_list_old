import React from "react";
import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import PosterFallback from "../../assets/no_poster_fallback.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const MovieSearchResult = ({
  movieDetails,
  isLoading,
  isError,
}: {
  movieDetails: MoviePopular;
  isLoading: boolean;
  isError: boolean;
}) => {
  const navigate = useNavigate();
  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Grid
      item
      container
      direction="column"
      sx={{
        marginInline: "auto",
        height: "150px",
        mb: 2,
        border: "1px solid lightgray",
        borderRadius: "10px",
        boxShadow: "0px 0px 0.3rem 0.1rem lightgray",
      }}
    >
      <Grid
        item
        sx={{
          borderRadius: "10px 0px 0px 10px",
          height: "150px",
          width: "100px",
          backgroundImage:
            movieDetails.poster_path !== null
              ? `url(https://image.tmdb.org/t/p/w200${movieDetails.poster_path})`
              : `url(${PosterFallback})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#DBDBDB",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/movie/${movieDetails.id}`)}
      />
      <Grid item container sx={{ pl: 2, pt: 2 }}>
        <Grid item xs={8.5} xl={8} sx={{ height: "50px" }}>
          <Link
            component="button"
            underline="none"
            onClick={() => navigate(`/movie/${movieDetails.id}`)}
          >
            <Typography variant="h6" fontWeight="bold">
              {movieDetails.title}
            </Typography>
          </Link>
          <Typography variant="body1">{movieDetails.release_date}</Typography>
        </Grid>
        <Grid
          item
          xs={8}
          md={10}
          xl={10.5}
          sx={{
            mt: 2,
            overflow: "hidden",
          }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              height: "50px",
              overflow: "hidden",
            }}
          >
            {movieDetails.overview}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieSearchResult;
