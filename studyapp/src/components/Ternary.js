import React, { useState, useEffect } from "react";

const Ternary = () => {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState(false);

  console.log(open);

  const onClick = () => {
    setOpen(!open);
    setText(!text);
  };

  return (
    <div>
      <button onClick={onClick}>{text ? <p>열기</p> : <p>닫기</p>}</button>
      {open ? <div>열림</div> : <div>닫힘</div>}
    </div>
  );
};

export default Ternary;
