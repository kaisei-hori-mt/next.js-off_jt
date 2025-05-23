"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function timeAppHome() {
  const [count, setTimer] = useState<Date>();
  useEffect(() => {
    setTimer(new Date());
    const timer = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return(
    <main>
      <p>{count ? count.toLocaleString() : "Loading..."}</p>
    </main>
  );
}