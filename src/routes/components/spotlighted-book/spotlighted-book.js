import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useStyles, useScreenSize } from "../../../hooks";
import SelectableBook from "../selectable-book";
import { getHeight } from "../../../utils/covers";

const useMuiStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    marginBottom: theme.spacing(5),
  },
  textContainer: {
    marginBottom: theme.spacing(5),
  },
}));

SpotlightedBook.propTypes = {
  coverSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  universalBookLink: PropTypes.string,
  showTitle: PropTypes.bool.isRequired,
};

export default function SpotlightedBook({
  coverSrc,
  title,
  universalBookLink,
  showTitle,
}) {
  const classes = useStyles(useMuiStyles);
  const theme = useTheme();
  const { isExtraSmallScreen, isSmallScreen } = useScreenSize();

  const width = isExtraSmallScreen
    ? theme.spacing(20)
    : isSmallScreen
    ? theme.spacing(25)
    : theme.spacing(30);
  const height = getHeight({ width, src: coverSrc });

  return (
    <SelectableBook
      coverSrc={coverSrc}
      title={title}
      classNames={{
        container: classes.container,
        image: classes.image,
        textContainer: classes.textContainer,
      }}
      universalBookLink={universalBookLink}
      showTitle={showTitle}
      imageDimensions={{
        width,
        height,
      }}
    />
  );
}
