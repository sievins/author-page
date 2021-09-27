import React from "react";
import PropTypes from "prop-types";
import MuiChip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../../../hooks";

const useMuiStyles = makeStyles({
  chip: {
    fontFamily: "proxima-nova-semibold",
  },
});

Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default function Chip({ className = "", label, href }) {
  const classes = useStyles(useMuiStyles);

  return (
    <MuiChip
      classes={{ root: classes.chip }}
      className={className}
      color="secondary"
      label={label}
      component="a"
      href={href}
      clickable
    />
  );
}
