import React, { useEffect } from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const {
    draw,
    stop,
    setScore,
    isAnimated,
    showPattern,
    isMouseInteractive,
    isColorInteractive,
    ...rest
  } = props;
  const { canvRef, frameId } = useCanvas({
    draw,
    isAnimated,
    showPattern,
    isMouseInteractive,
    isColorInteractive,
  });

  useEffect(() => {
    if (stop) {
      window.cancelAnimationFrame(frameId);
    }
  }, [stop]);

  return <canvas ref={canvRef} {...props} />;
};

export default Canvas;
