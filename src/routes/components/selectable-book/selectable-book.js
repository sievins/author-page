import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "../../../hooks";
import Chip from "../chip";
import Fade from "./fade";
import Image from "./image";

const useMuiStyles = makeStyles((theme) => ({
  text: {
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: theme.palette.text.secondary,
  },
}));

SelectableBook.propTypes = {
  chipLabel: PropTypes.string,
  chipPath: PropTypes.string,
  chipTooltip: PropTypes.string,
  showChip: PropTypes.bool,
  coverSrc: PropTypes.string.isRequired,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    image: PropTypes.string,
    textContainer: PropTypes.string,
    text: PropTypes.string,
    chip: PropTypes.string,
  }),
  imageDimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  isChipLink: PropTypes.bool,
  showTitle: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  universalBookLink: PropTypes.string,
};

export default function SelectableBook({
  chipLabel,
  chipPath,
  chipTooltip = "",
  coverSrc,
  classNames = {},
  imageDimensions,
  isChipLink,
  showChip = false,
  showTitle,
  title,
  universalBookLink,
}) {
  const classes = useStyles(useMuiStyles);
  const [focus, setFocus] = useState(false);

  const style = {
    cursor: universalBookLink ? "pointer" : "default",
  };

  const openUniversalBookLink = () => {
    if (universalBookLink) window.open(universalBookLink);
  };

  return (
    <div className={classNames.container}>
      <Fade in={focus} opacity={0.7}>
        <Image
          src={coverSrc}
          className={classNames.image}
          style={style}
          imageDimensions={imageDimensions}
          onMouseEnter={() => universalBookLink && setFocus(true)}
          onMouseLeave={() => universalBookLink && setFocus(false)}
          onClick={openUniversalBookLink}
        />
      </Fade>
      {showTitle && (
        <Fade in={focus} className={classNames.textContainer}>
          <span
            className={`${classes.text} ${classNames.text}`}
            style={style}
            onMouseEnter={() => universalBookLink && setFocus(true)}
            onMouseLeave={() => universalBookLink && setFocus(false)}
            onClick={openUniversalBookLink}
          >
            {title}
          </span>
        </Fade>
      )}
      {showChip && (
        <Tooltip title={chipTooltip} placement="right">
          <Chip
            className={classNames.chip}
            label={chipLabel}
            href={chipPath}
            isLink={isChipLink}
          />
        </Tooltip>
      )}
    </div>
  );
}
