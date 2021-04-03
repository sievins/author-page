import useOrientation from "./use-orientation";
import useScreenSize from "./use-screen-size";

export default function useStyles(useMuiStyles) {
  const { isLandscape, isPortrait } = useOrientation();
  const {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  } = useScreenSize();

  const classes = useMuiStyles({
    isLandscape,
    isPortrait,
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
  });

  return classes;
}
