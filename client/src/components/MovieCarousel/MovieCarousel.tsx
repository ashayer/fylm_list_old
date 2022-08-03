import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const MovieCarousel = ({ movieList }: { movieList: MoviePopular[] }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  return (
    <Grid container sx={{ backgroundColor: "white", mt: 1, mb: 5, justifyContent: "center" }}>
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
              "&:hover": {
                transform: "scale(1.5)",
                transition: "all 0.1s ease",
                color: "lightblue",
              },
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
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieList[index].backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: "white",
              justifyContent: "end",
              borderRadius: "10px",
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
                pb: 8,
                maxHeight: "50vh",
                borderRadius: "10px",
              }}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    cursor: "pointer",
                    textDecoration: "underline 0.1em rgba(255, 255, 255, 0)",
                    "&:hover": {
                      textDecorationColor: "rgba(255, 255, 255, 1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => navigate(`/movie/${movieList[index].id}}`)}
                >
                  {movieList[index].title} <OpenInNewIcon fontSize="small" />
                </Typography>
                <Rating
                  size="large"
                  name="read-only"
                  value={parseFloat((movieList[index].vote_average / 2).toFixed(1))}
                  precision={0.5}
                  readOnly
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{ textOverflow: "ellipsis", whiteSpace: "normal" }}
                  gutterBottom
                >
                  {movieList[index].overview}
                </Typography>
                {movieList[index].release_date}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item order={{ xs: 3, md: 3 }}>
          <Box
            onClick={() => {
              index < movieList.length - 1 ? setIndex(index + 1) : setIndex(0);
            }}
            sx={{
              "&:hover": {
                transform: "scale(1.5)",
                transition: "all 0.1s ease",
                color: "lightblue",
              },
            }}
          >
            <ChevronRightRoundedIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieCarousel;
