import React, { forwardRef } from "react";
import MuiChip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../../hooks";

const useMuiStyles = makeStyles({
  chip: {
    fontFamily: "proxima-nova-semibold",
  },
});

export default forwardRef(function Chip(
  { className = "", label, href, isLink = true, ...props },
  ref
) {
  const classes = useStyles(useMuiStyles);

  return (
    <div className={className} ref={ref} {...props}>
      <MuiChip
        classes={{ root: classes.chip }}
        color={isLink ? "secondary" : "primary"}
        label={label}
        component={isLink ? "a" : "div"}
        href={href}
        clickable={isLink}
      />
    </div>
  );
});
