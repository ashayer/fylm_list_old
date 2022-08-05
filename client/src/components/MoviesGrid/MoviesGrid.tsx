import { Box, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ data }: { data: any }) => {
  return (
    // <InfiniteScroll
    //   dataLength={movieList.length} //This is important field to render the next data
    //   next={setPage((old: number) => old + 1)}
    //   hasMore={true}
    //   loader={<h4>Loading...</h4>}
    // >
    <Grid
      container
      item
      sx={{
        marginInline: "auto",
        justifyContent: "center",
      }}
      xs={10}
    >
      {data.pages.map((page: MoviePopular[]) => {
        return page.map((movieDetails: MoviePopular) => (
          <MovieCard movieDetails={movieDetails} key={movieDetails.id}></MovieCard>
        ));
      })}
    </Grid>
    //</InfiniteScroll>
  );
};

export default MovieGrid;
