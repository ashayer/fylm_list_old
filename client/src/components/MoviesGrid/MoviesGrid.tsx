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
        border: "1px solid red",
      }}
      lg={10}
      md={12}
    >
      {movieList.map((movie: any) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            posterpath={movie.poster_path}
            id={movie.id}
          />
        );
      })}
    </Grid>
    //</InfiniteScroll>
  );
};

export default MovieGrid;
