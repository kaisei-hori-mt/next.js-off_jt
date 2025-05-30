"use client";
import { useState } from "react";

export default function CountAppPage() {
  const [num, setNum] = useState<number>(0);

  const incrementBtn = () => {
    setNum((prev) => prev + 1);
  };
  const decrementBtn = () => {
    setNum((prev) => prev - 1);
  };
  return (
    <main>
      <p>カウント:{num}</p>
      <button type="button" onClick={incrementBtn}>
        +1
      </button>
      <button type="button" onClick={decrementBtn}>
        -1
      </button>
    </main>
  );
}
