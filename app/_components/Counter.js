"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>
      <p>{users.length}</p>
    </div>
  );
}
