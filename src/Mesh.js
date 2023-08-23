import React, { useState, useRef } from "react";

const Mesh = props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const scrollAmount = props.percentage <= 0 ? 0.0001 : props.percentage;
  if (mesh.current) {
    // mesh.current.rotation.x = scrollAmount * 10;
    mesh.current.rotation.y = scrollAmount * 5;
  }
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2.5, 2.5, 2.5] : [2, 2, 2]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <tetrahedronGeometry attach="geometry" />
      <meshPhongMaterial
        attach="material"
        color={hovered ? "hotpink" : "#00b7ff"}
      />
    </mesh>
  );
};

export default Mesh;
