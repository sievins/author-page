import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Menu from "./menu";
import Banner from "./banner";

TopBar.propTypes = {
  setTopBarHeight: PropTypes.func.isRequired,
};

export default function TopBar({ setTopBarHeight, ...props }) {
  const containerElement = useRef(null);

  useLayoutEffect(() => {
    setTopBarHeight(containerElement.current.clientHeight);
  });

  return (
    <div ref={containerElement}>
      <Menu {...props} />
      <Banner {...props} />
    </div>
  );
}
