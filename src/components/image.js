import React from "react";
import PropTypes from "prop-types";
import MuiImage from "material-ui-image";

Image.propTypes = {
  imageDimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  alt: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  classes: PropTypes.shape({
    image: PropTypes.string,
  }),
  style: PropTypes.object,
};

export default function Image({
  imageDimensions,
  alt,
  className,
  style,
  classes = {},
  ...props
}) {
  // If the image dimensions are known before render then use material-ui-image so they can be faded in nicely without content shifting

  const useMaterialUiImage = !!imageDimensions;

  return useMaterialUiImage ? (
    <div className={className}>
      <MuiImage
        {...props}
        className={classes.image}
        alt={alt}
        style={{
          ...style,
          ...imageDimensions,
          paddingTop: null,
        }}
        color="transparent"
      />
    </div>
  ) : (
    <img {...props} alt={alt} className={className} style={style} />
  );
}
