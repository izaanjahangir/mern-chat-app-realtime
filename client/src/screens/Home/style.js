import { makeStyles } from "@material-ui/core/styles";

import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
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
  },
  leftContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.PRIMARY_DARK,
  },
  rightContainer: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.WHITE,
  },
}));

export default useStyles;
