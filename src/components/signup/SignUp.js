import React, { useState, useEffect } from "react";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  useEffect(() => {}, [userName, email, password]);
  return (
    <form>
      <h3> sign up</h3>
      <label className="userName">name</label>
      <input
        type="text"
        placeholder="name"
        value={userName}
        onChange={handleUserNameChange}
        required
      />
      <label className="email">email</label>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label className="password">password</label>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />{" "}
      <button className="signup-btn" type="submit">
        signup
      </button>
    </form>
  );
}

export default SignUp;
