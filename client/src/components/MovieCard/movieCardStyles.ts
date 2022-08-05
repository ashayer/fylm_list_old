const styles = {
  movieCardContainer: {
    justifyContent: "center",
    cursor: "pointer",
    direction: "column",
    alignItems: "start",
    textAlign: "center",
    "&:hover": {
      transform: "scale(0.95)",
    },
    transition: "all 0.1s ease",
    p: 1,
    width: "200px",
  },
  movieCardBackground: {
    borderRadius: "10px 10px 0px 0px",
    height: "300px",
    width: "200px",
  },
  movieCardText: {
    width: "100%",
  },
};

export default styles;
