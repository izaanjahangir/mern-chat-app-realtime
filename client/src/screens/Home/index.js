import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import Loader from "../../components/Loader";
// import NoMessage from "./components/NoMessage";
import Header from "./components/Header";
import ChatHeader from "./components/ChatHeader";
import MessageInputArea from "./components/MessageInputArea";
import MessageList from "../../components/MessageList";
import useStyles from "./style";

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <div className={classes.boxContainer}>
        <Grid container>
          <Grid className={classes.leftContainer} item xs={12} md={4}>
            <Header />
            <List component="nav" aria-label="secondary mailbox folders">
              {/* <div style={{ textAlign: "center" }}>
                <Loader />
              </div> */}
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
          <Grid className={classes.rightContainer} item xs={12} md={8}>
            <div className={classes.rightInnerContainer}>
              <ChatHeader />
              <div className={classes.messageContainer}>
                {/* <Message />
                <Message currentUser={false} /> */}
                <div style={{ textAlign: "center" }}>
                  <Loader />
                </div>
              </div>
              <MessageInputArea />
            </div>
            {/* <NoMessage /> */}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Home;
