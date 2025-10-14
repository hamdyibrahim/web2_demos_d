"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // incrementing the state multiple times
    setCount(count + 1);
    console.log("Count: " + count);
  };

  return (
    <div>
      <h2 className="text-xl font-bold">React State Based Counter</h2>
      <p>Count: {count}</p>
      <button
        className="rounded bg-slate-300 font-bold p-4"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
