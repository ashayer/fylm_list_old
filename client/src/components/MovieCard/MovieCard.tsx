import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  title: string;
  release_date: string;
  posterpath: string;
  id: number;
};

const MovieCard = ({ title, release_date, posterpath, id }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      item
      sx={{
        borderRadius: "10px",
        justifyContent: "center",
        cursor: "pointer",
        direction: "column",
        alignItems: "start",
        textAlign: "center",
        "&:hover": {
          transform: "scale(0.95)",
        },
        transition: "all 0.1s ease",
      }}
      onClick={() => navigate(`/movie/${id}`)}
      width="200px"
    >
      <Grid
        item
        sx={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w200/${posterpath})`,
          borderRadius: "10px",
        }}
        height="300px"
        width="200px"
      ></Grid>
      <Typography variant="body1" sx={{ width: "100%" }} gutterBottom>
        <strong>{title}</strong>
      </Typography>
      <Typography variant="body1" sx={{ width: "100%" }} gutterBottom>
        <strong>{release_date}</strong>
      </Typography>
    </Grid>
  );
};

export default MovieCard;

// sx={{
//   backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   color: "white",
//   justifyContent: "end",
// }}
