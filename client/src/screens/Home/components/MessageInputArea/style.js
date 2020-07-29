import { makeStyles } from "@material-ui/core/styles";

import colors from "../../../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "50px",
    backgroundColor: colors.GREY,
    display: "flex",
  },
}));

export default useStyles;
