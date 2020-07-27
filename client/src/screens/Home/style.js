import { makeStyles } from "@material-ui/core/styles";

import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    maxHeight: "100vh",
    display: "flex",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: colors.PRIMARY_LIGHT,
  },
  boxContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    borderRadius: 50,
    backgroundColor: "red",
  },
  leftContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.PRIMARY_DARK,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "300px",
      height: "100%",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      maxHeight: "100vh",
    },
    overflowY: "scroll",
    maxHeight: `calc(100vh - ${theme.spacing(2) + theme.spacing(2)}px)`,
  },
  rightContainer: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.WHITE,
    [theme.breakpoints.down("sm")]: {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
  },
}));

export default useStyles;
