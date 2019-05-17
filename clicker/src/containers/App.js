import React, { useState } from "react";
import Count from "../components/Count/Count";
import Add from "../components/Add/Add";
import Sub from "../components/Sub/Sub";
import Reset from "../components/Reset/Reset";

function App() {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSub = () => {
    setCount(count - 1);
  };

  const onReset = () => {
    setCount(0);
  };

    return (
      <div>
        <Count counter={count} />
        <Add onAdd={onAdd} />
        <Sub onSub={onSub} />
        <Reset onReset={onReset} />
      </div>
    );
  }

export default App;
