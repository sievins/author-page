import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = (opacity) => ({
  entering: { opacity },
  entered: { opacity },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
});

Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  opacity: PropTypes.number,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default function Fade({
  in: inProp,
  opacity = 0.5,
  children,
  className,
}) {
  const nodeRef = React.useRef(null);

  return (
    <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles(opacity)[state],
          }}
          className={className}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
