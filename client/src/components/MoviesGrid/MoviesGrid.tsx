import { Box, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ data, fetchNextPage }: { data: any; fetchNextPage: any }) => {
  const gridLength = useRef(20);
  const updateGridLength = () => {
    fetchNextPage();
    data.pages.map((page: MoviePopular[]) => (gridLength.current += page.length));
  };
  
  return (
    <InfiniteScroll
      dataLength={gridLength.current} //This is important field to render the next data
      next={updateGridLength}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
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
    </InfiniteScroll>
  );
};

export default MovieGrid;
