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
        border: "1px solid white",
        borderRadius: "10px",
        width: "160px",
        justifyContent: "center",
        cursor: "pointer",
        m: 1,
        "&:hover": { backgroundColor: "white" },
      }}
      onClick={() => navigate(`/movie/${id}`)}
    >
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w200/${posterpath}`}
        sx={{ height: 210, width: 140 }}
      />
      <Typography variant="body1" sx={{ p: 1 }}>
        {release_date}
      </Typography>
      <Typography variant="body1" sx={{ p: 1 }}>
        {title}
      </Typography>
    </Grid>
  );
};

export default MovieCard;
