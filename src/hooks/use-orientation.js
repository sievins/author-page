import { useState, useLayoutEffect } from "react";

export default function useOrientation() {
  const [orientations, setOrientations] = useState({
    isLandscape: true,
    isPortrait: false,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      const orientation =
        window.innerHeight / window.innerWidth > 1 ? "portrait" : "landscape";

      setOrientations({
        isLandscape: orientation === "landscape",
        isPortrait: orientation === "portrait",
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return orientations;
}
