import React from "react";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../hooks";

const useMuiStyles = makeStyles((theme) => ({
  link: () => ({
    color: theme.palette.primary.dark,
  }),
}));

export default function Link({ children, ...props }) {
  const classes = useStyles(useMuiStyles);

  return (
    <MuiLink {...props} className={classes.link}>
      {children}
    </MuiLink>
  );
}
