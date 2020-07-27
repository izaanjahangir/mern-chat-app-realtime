import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import MessageList from "../../components/MessageList";
import useStyles from "./style";

function Home() {
  const classes = useStyles();

  function handleClick() {}

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <div className={classes.boxContainer}>
        <Grid container>
          <Grid className={classes.leftContainer} item xs={12} md={4}>
            <div className={classes.headerContainer}>
              <Button variant="contained" color="primary" onClick={handleClick}>
                Open Popover
              </Button>
            </div>
            <List component="nav" aria-label="secondary mailbox folders">
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
              <MessageList />
            </List>
          </Grid>
          <Grid className={classes.rightContainer} item xs={12} md={8}></Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Home;
