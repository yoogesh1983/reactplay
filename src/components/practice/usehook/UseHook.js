import React, { useState } from "react";

function UseHook(Child) {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
  };

  return [count, handleChange];
}

export default UseHook;


