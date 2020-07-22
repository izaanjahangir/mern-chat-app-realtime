import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <p>Home</p>
      </div>
    </Container>
  );
}

export default Home;
