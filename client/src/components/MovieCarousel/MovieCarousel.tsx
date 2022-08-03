import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useNavigate } from "react-router-dom";
const MovieCarousel = ({ movieList }: { movieList: MoviePopular[] }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <Grid container sx={{ backgroundColor: "white", mt: 1, justifyContent: "center" }}>
      <Grid item>
        <Typography variant="h2">Trending Now</Typography>
      </Grid>

      <Grid container sx={{ justifyContent: "center", mt: 1, alignItems: "center" }}>
        <Grid item order={{ xs: 3, md: 1 }}>
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

        <Grid item order={{ xs: 2, md: 2 }} xs={12} md={10} lg={8} xl={6}>
          <Grid
            container
            direction="column"
            sx={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: "white",
              justifyContent: "end",
            }}
            height="50vh"
          >
            <Grid
              container
              sx={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,0.75), rgba(0,0,0,1))",
                pl: 5,
                pr: 5,
                pb: 10,
                maxHeight: "50vh",
              }}
            >
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  {movieList[index].title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  sx={{ textOverflow: "ellipsis", whiteSpace: "normal" }}
                  gutterBottom
                >
                  {movieList[index].overview}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item order={{ xs: 3, md: 3 }}>
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
