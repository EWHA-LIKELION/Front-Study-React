import React, { useRef } from "react";

const Ref = () => {
  const inputElement = useRef();

  setTimeout(() => inputElement.current.focus(), 3000);

  return (
    <div className="App">
      <div>3초 후 포커스!</div>
      <input ref={inputElement} placeholder="작성하시오" />
    </div>
  );
};
export default Ref;
