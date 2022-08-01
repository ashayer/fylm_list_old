import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const MovieCarousel = ({ movieList }: { movieList: MoviePopular[] }) => {
  const [index, setIndex] = useState(0);
  return (
    <Grid container sx={{ backgroundColor: "white", mt: 1, justifyContent: "center" }}>
      <Grid item>
        <Typography variant="h2">Trending Now</Typography>
      </Grid>
      <Grid container sx={{ justifyContent: "center", mt: 1 }}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              index > 0 ? setIndex(index - 1) : setIndex(movieList.length - 1);
            }}
            sx={{ height: "50vh" }}
          >
            Prev
          </Button>
        </Grid>

        <Grid item>
          <Box
            sx={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "1px solid white",
              color: "white",
              mb: 1,
            }}
            height="50vh"
            width="50vw"
          >
            <Typography>{movieList[index].title}</Typography>
            <Typography>{movieList[index].overview}</Typography>
          </Box>
        </Grid>

        <Grid item>
          <div
            onClick={() => {
              index < movieList.length - 1 ? setIndex(index + 1) : setIndex(0);
            }}
            style={{ height: "50vh", backgroundColor: "transparent", border: "none" }}
          >
            Next
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCarousel;
