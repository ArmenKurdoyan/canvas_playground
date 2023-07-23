import { useRef, useEffect } from "react";
import { screenSize } from "./globals";

const useCanvas = ({
  draw,
  isAnimated,
  showPattern,
  isMouseInteractive,
  isColorInteractive,
}) => {
  const canvasRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    let frameCount = 0;

    const render = () => {
      frameCount++;
      draw({
        ctx: context,
        showPattern,
        isMouseInteractive,
        isColorInteractive,
      });
      if (!isAnimated && frameCount < 1) {
        return (animationFrameIdRef.current = requestAnimationFrame(render));
      }

      if (isAnimated) {
        return (animationFrameIdRef.current = requestAnimationFrame(render));
      }
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [draw, isAnimated, showPattern, isMouseInteractive, isColorInteractive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
  });

  return { canvRef: canvasRef, frameId: animationFrameIdRef.current };
};

export default useCanvas;
