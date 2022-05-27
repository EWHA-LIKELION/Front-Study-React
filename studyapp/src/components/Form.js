import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setText(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="작성해주세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">제출</button>
      </form>

      <p>{text}</p>
    </div>
  );
};

export default Form;
