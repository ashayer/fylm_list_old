import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const MovieCarousel = ({ movieList }: { movieList: MoviePopular[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <Grid container sx={{ backgroundColor: "white", mt: 1, justifyContent: "center" }}>
      <Grid item>
        <Typography variant="h2">Trending Now</Typography>
      </Grid>

      <Grid container sx={{ justifyContent: "center", mt: 1, alignItems: "center" }}>
        <Grid item order={{ xs: 3, md: 1 }} sx={{ border: "2px solid red" }}>
          <Box
            onClick={() => {
              index > 0 ? setIndex(index - 1) : setIndex(movieList.length - 1);
            }}
            sx={{
              height: "100%",
              alignContent: "center",
            }}
          >
            <ChevronLeftRoundedIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
          </Box>
        </Grid>

        <Grid
          item
          order={{ xs: 2, md: 2 }}
          sx={{ border: "2px solid red" }}
          xs={12}
          md={10}
          lg={8}
          xl={6}
        >
          <Grid
            container
            sx={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "2px solid red",
              color: "white",
            }}
            height="50vh"
          >
            <Typography>{movieList[index].title}</Typography>
            <Typography>{movieList[index].overview}</Typography>
          </Grid>
        </Grid>

        <Grid item order={{ xs: 3, md: 3 }} sx={{ border: "2px solid red" }}>
          <Box
            onClick={() => {
              index < movieList.length - 1 ? setIndex(index + 1) : setIndex(0);
            }}
            sx={{ height: "100%" }}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCarousel;
