import { Box, Button, Grid, IconButton, Link, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "./movieCarouselStyles";

const MovieCarousel = ({ movieList }: { movieList: MoviePopular[] }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <Grid container sx={{ mb: 5, justifyContent: "center" }}>
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Trending Now
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item order={{ xs: 3, md: 1 }}>
          <IconButton
            onClick={() => {
              index > 0 ? setIndex(index - 1) : setIndex(movieList.length - 1);
            }}
            sx={{ ...styles.movieCarouselNavButton }}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>
        </Grid>

        <Grid item container order={{ xs: 2, md: 2 }} xs={12} md={10} lg={8} xl={6}>
          <Grid
            item
            container
            direction="column"
            sx={{
              ...styles.movieCarouselBackground,
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieList[index].backdrop_path})`,
            }}
          >
            <Grid item container sx={{ ...styles.movieCarouselTextContainer }}>
              <Grid item>
                <Link
                  component="div"
                  underline="none"
                  onClick={() => navigate(`/movie/${movieList[index].id}}`)}
                  sx={{ ...styles.movieCarouselTitle }}
                >
                  <Typography variant="h3">
                    {movieList[index].title} <OpenInNewIcon fontSize="small" />
                  </Typography>
                </Link>
                <Rating
                  size="large"
                  value={parseFloat((movieList[index].vote_average / 2).toFixed(1))}
                  precision={0.5}
                  readOnly
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  {movieList[index].overview}
                </Typography>
                <Typography variant="h6">{movieList[index].release_date}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item order={{ xs: 3, md: 3 }}>
          <IconButton
            onClick={() => {
              index < movieList.length - 1 ? setIndex(index + 1) : setIndex(0);
            }}
            sx={{ ...styles.movieCarouselNavButton }}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCarousel;
