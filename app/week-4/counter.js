"use client";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);

      console.log("count value: " + count);
    } else {
      alert("count value reached the max value (10)");
    }
  };

  return (
    <div>
      <p>Counter Value: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-400 font-bold hover:bg-blue-700 active:bg-red-500 rounded text-white p-2"
      >
        Increment
      </button>
    </div>
  );
}
