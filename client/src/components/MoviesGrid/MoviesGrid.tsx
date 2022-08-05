import { Box, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ movieList }: { movieList: MoviePopular[] }) => {
  return (
    // <InfiniteScroll
    //   dataLength={movieList.length} //This is important field to render the next data
    //   next={loadNextPage}
    //   hasMore={true}
    //   loader={<h4>Loading...</h4>}
    // >
    <Grid
      container
      item
      sx={{
        marginInline: "auto",
        justifyContent: "space-evenly",
      }}
      lg={10}
      md={12}
    >
      {movieList.map((movie: MoviePopular) => {
        return <MovieCard movieDetails={movie} key={movie.id} />;
      })}
    </Grid>
    //</InfiniteScroll>
  );
};

export default MovieGrid;
