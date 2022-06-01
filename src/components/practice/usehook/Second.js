import React from "react";
import useHook from "./UseHook";

const Second = ()=> {

  const [count, handleChange] = useHook({});

  return (
    <div style={{ backgroundColor: "green" }}>
      <p>Current value: {count}</p>
      <button onMouseMove={() => handleChange()}>Increase</button>
    </div>
  );
};

export default Second;
