import React, { useState, useCallback } from "react";
import Login from "./Login";

const Register = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodo] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const AddTodo = useCallback(() => {
    setTodo((prev) => [...prev, `New Entry`]);
  }, [todos]);

  return (
    <>
      <div>
        <Login todos={todos} AddTodo={AddTodo} />
        <hr />
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
      </div>
      <br />
    </>
  );
};

export default Register;
