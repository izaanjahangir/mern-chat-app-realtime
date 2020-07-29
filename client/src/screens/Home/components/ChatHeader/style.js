import { makeStyles } from "@material-ui/core/styles";

import colors from "../../../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "70px",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: colors.GREY,
  },
  username: {
    paddingLeft: theme.spacing(2),
  },
}));

export default useStyles;
