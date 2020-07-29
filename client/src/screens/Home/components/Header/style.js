import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(1),
    display: "flex",
    justifyContent: "flex-end",
  },
  moreIcon: {
    width: "20px",
    cursor: "pointer",
  },
}));

export default useStyles;
