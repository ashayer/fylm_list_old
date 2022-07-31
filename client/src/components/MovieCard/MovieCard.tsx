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

  return <Grid></Grid>;
};

export default MovieCard;
