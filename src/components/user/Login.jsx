import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div>
        <h1>My Login Page</h1>
        <input
          type="text"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="number" placeholder="enter your password" />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>

      <h1> Value:{email}</h1>
    </>
  );
};

export default Login;
