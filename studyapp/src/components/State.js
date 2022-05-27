import React, { useState, useEffect } from "react";

const State = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>이름 : {num}</h1>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default State;
