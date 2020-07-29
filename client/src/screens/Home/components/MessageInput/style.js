import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(3),
    flex: 1
  },
  input: {
    borderRadius: "20px",
    borderWidth: 0,
    height: "35px",
    flex: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    "&:focus": {
      outline: 0,
    },
  },
}));

export default useStyles;
