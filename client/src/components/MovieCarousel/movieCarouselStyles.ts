const styles = {
  movieCarouselNavButton: {
    "&:hover": {
      transition: "all 0.1s ease",
      color: "black",
    },
    transition: "all 0.25s ease",
  },
  movieCarouselBackground: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    justifyContent: "end",
    borderRadius: "10px",
    minHeight: "50vh",
  },
  movieCarouselTextContainer: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5), rgba(0,0,0,1))",
    p: 5,
  },
  movieCarouselTitle: {
    cursor: "pointer",
    textDecoration: "underline 0.1em rgba(255, 255, 255, 0)",
    "&:hover": {
      textDecorationColor: "rgba(255, 255, 255, 1)",
    },
    transition: "all 0.3s ease",
    color: "white",
  },
};

export default styles;
