import React, { useState } from "react";
import "./Blob.css";

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const sqSize = 250;
  const delay = 200; // Adjust the delay time (in milliseconds) as per your requirement

  const handleMouseMove = (e) => {
    setTimeout(() => {
      setPosition({ x: e.clientX - sqSize / 2, y: e.clientY - sqSize / 2 });
    }, delay);
  };

  return (
    <div
      className="parent-div"
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="blob" style={{ top: position.y, left: position.x }}></div>
      <div className="blur">
        <h1>Sandeep</h1>
      </div>
    </div>
  );
};

export default Blob;
