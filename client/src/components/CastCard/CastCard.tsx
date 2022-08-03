import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CastCard = ({ castMember }: { castMember: CastDetails }) => {
  const navigate = useNavigate();

  const profilePath = castMember.profile_path;

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
          backgroundImage:
            profilePath !== null
              ? `url(https://image.tmdb.org/t/p/w200/${castMember.profile_path})`
              : "url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg)",
          borderRadius: "10px",
          backgroundPosition: "center",
          backgroundSize: "cover",
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
