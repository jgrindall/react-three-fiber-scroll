import React from "react";
import Box from "./Box";
import "./styles.css";

const boxCount = Array.apply(null, Array(15));

export default function App() {
  return (
    <div className="App">
      {boxCount.map((box, index) => (
        <Box key={index} />
      ))}
    </div>
  );
}
