import React from "react";
import useHook from "./UseHook";

const First = ()=> {

    const [count, handleChange] = useHook({});

  return (
    <div style={{ backgroundColor: "green" }}>
      <p>Current value: {count}</p>
      <button onClick={() => handleChange()}>Increase</button>
    </div>
  );
};

export default First;
