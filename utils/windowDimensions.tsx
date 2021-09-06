import { useEffect } from "react";
import { useState } from "react";

type WindowDimensions = {
  width: number,
  height: number,
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function onResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowSize;
}
