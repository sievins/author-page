import { underlayFactory } from "../../../components";

const calculateHeight = ({
  isExtraSmallScreen,
  isSmallScreen,
  isMediumScreen,
  isLargeScreen,
}) =>
  isLargeScreen
    ? "48vh"
    : isMediumScreen
    ? "48vh"
    : isSmallScreen
    ? "42vh"
    : isExtraSmallScreen
    ? "36vh"
    : "48vh";

const Underlay = underlayFactory(calculateHeight);

export default Underlay;
