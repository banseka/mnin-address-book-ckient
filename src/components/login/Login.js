import React, { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  useEffect(() => {}, [email, password]);
  return (
    <form>
      <label>email</label>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label>passwprd</label>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button className="login-btn" type="submit">
        login
      </button>
    </form>
  );
}

export default Login;
