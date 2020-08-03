import { makeStyles } from "@material-ui/core/styles";

import colors from "../../config/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  otherUserContainer: {
    flexDirection: "row-reverse",
  },
  avatarContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  messageContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: colors.PRIMARY_DARK,
    color: colors.WHITE,
    borderRadius: "10px",
    maxWidth: "75%",
    boxShadow: `0px 0px 31px -5px ${colors.PRIMARY_DARK}`,
  },
  otherMessageContainer: {
    backgroundColor: colors.WHITE,
    color: colors.PRIMARY_DARK,

    boxShadow: `0px 0px 31px -5px ${colors.PRIMARY_DARK}`,
  },
}));

export default useStyles;
