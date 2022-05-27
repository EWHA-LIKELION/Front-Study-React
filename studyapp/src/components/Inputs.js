import React, { useState } from "react";

const Inputs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        placeholder="이름"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="이메일"
        name="email"
        value={email}
        onChange={onChange}
      />

      <p>{inputs.username}</p>
      <p>{inputs.email}</p>
    </div>
  );
};

export default Inputs;
