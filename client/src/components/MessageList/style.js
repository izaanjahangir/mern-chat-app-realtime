import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    width: theme.spacing(7),
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  userDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  message: {
    color: "white",
  },
  primary: {
    color: "white",
  },
}));

export default useStyles;
