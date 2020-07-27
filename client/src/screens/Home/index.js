import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import useStyles from "./style";

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <div className={classes.boxContainer}>
        <Grid container>
          <Grid
            className={classes.leftContainer}
            item
            xs={12}
            md={4}
          ></Grid>
          <Grid
            className={classes.rightContainer}
            item
            xs={12}
            md={8}
          ></Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Home;
