import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CastCard = ({ castMember }: { castMember: CastDetails }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      item
      sx={{
        borderRadius: "10px",
        textAlign: "center",
        p: 1,
      }}
      width="200px"
    >
      <Grid
        item
        sx={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w200/${castMember.profile_path})`,
          borderRadius: "10px",
        }}
        height="300px"
        width="200px"
      />
      <Typography variant="body1" sx={{ width: "100%" }} gutterBottom>
        <strong>{castMember.name}</strong>
      </Typography>
    </Grid>
  );
};

export default CastCard;

// sx={{
//   backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieList[index].backdrop_path})`,
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   color: "white",
//   justifyContent: "end",
// }}
