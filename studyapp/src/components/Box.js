import React, { useState, useEffect } from "react";

const Box = () => {
  const [num, setNum] = useState(0);

  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      1st Box
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      2nd Box
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div style={{ border: "solid 5px gray", padding: "10px", margin: "5px" }}>
      3rd Box
    </div>
  );
};

export default Box;
