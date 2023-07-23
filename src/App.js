import React, { useState } from "react";
import Canvas from "./Canvas";
import { drawCircle, drawBall } from "./Drawings";

import "./style.css";

// this literally took 2 days

function App() {
  const [hide, setHide] = useState(false);
  const [stop, setStop] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showPattern, setShowPattern] = useState(false);
  const [isMouseInteractive, setIsMouseInteractive] = useState(false);
  const [isColorInteractive, setIsColorInteractive] = useState(false);
  // add circle stroke or fill control

  // have different control bars for diff animations
  return (
    <div>
      <Canvas
        draw={drawCircle}
        showPattern={showPattern}
        isAnimated={isAnimated}
        stop={stop}
        isMouseInteractive={isMouseInteractive}
        isColorInteractive={isColorInteractive}
      />
      {/* <Canvas
        draw={drawBall}
        showPattern={showPattern}
        isAnimated={isAnimated}
        stop={stop}
        isMouseInteractive={isMouseInteractive}
        isColorInteractive={isColorInteractive}
      /> */}

      <div className="game_block">
        {hide ? (
          <div className="button" onClick={() => setHide(!hide)}>
            <div className="text">show</div>
          </div>
        ) : (
          <div>
            <div className="button" onClick={() => setHide(!hide)}>
              <div className="text">hide</div>
            </div>
            <div className="button" onClick={() => setStop(!stop)}>
              <div className="text">stop</div>
            </div>
            <div
              className="button"
              onClick={() => {
                setStop(!stop);
                setIsAnimated(false);
                setShowPattern(false);
                setIsMouseInteractive(false);
                setIsColorInteractive(false);
              }}
            >
              <div className="text">restart</div>
            </div>
            <div className="button" onClick={() => setIsAnimated(!isAnimated)}>
              <div className="text">animating: {`${isAnimated}`}</div>
            </div>
            <div
              className="button"
              onClick={() => setShowPattern(!showPattern)}
            >
              <div className="text">show pattern: {`${showPattern}`}</div>
            </div>
            <div
              className="button"
              onClick={() => setIsColorInteractive(!isColorInteractive)}
            >
              <div className="text">
                active colors: {`${isColorInteractive}`}
              </div>
            </div>
            <div
              className="button"
              onClick={() => setIsMouseInteractive(!isMouseInteractive)}
            >
              <div className="text">
                acttive mouse: {`${isMouseInteractive}`}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
