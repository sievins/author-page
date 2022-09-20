import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../hooks";

const useMuiStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "frieght-disp-bold",
    fontSize: "calc(28px + 1.2vmin)",
    color: theme.palette.text.secondary,
  },
}));

export default function Heading({ children, className, ...props }) {
  const classes = useStyles(useMuiStyles);

  return (
    <Typography {...props} className={clsx([classes.heading, className])}>
      {children}
    </Typography>
  );
}
