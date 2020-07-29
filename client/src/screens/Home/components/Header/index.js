import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";

import Button from "../../../../components/Button";
import useStyles from "./style";

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={classes.headerContainer}>
      <img
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onClick={handlePopoverOpen}
        alt="more"
        className={classes.moreIcon}
        src={require("../../../../assets/icons/more.svg")}
      />
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <Button color="default" variant="text">Logout</Button>
        </div>
      </Popover>
    </div>
  );
}

export default Header;
