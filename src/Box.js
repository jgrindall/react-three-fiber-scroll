import React from "react";
import { useScrollPercentage } from "react-scroll-percentage";
import { Canvas } from "react-three-fiber";
import Mesh from "./Mesh";

const Box = props => {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0
  });

  return (
    <div ref={ref}>
      <Canvas
        pixelRatio={1}
        orthographic
        camera={{ zoom: 100, position: [0, 0, 0] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Mesh position={[0, 0, 0]} percentage={percentage} />
      </Canvas>

      {/* <h2>{`Percentage scrolled: ${percentage * 10}%.`}</h2> */}
    </div>
  );
};

export default Box;
