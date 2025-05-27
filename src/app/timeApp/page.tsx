"use client";
import { useEffect, useState } from "react";

export default function TimeAppPage() {
  const [count, setCount] = useState<Date>();
  useEffect(() => {
    setCount(new Date());
    const timer = setInterval(() => {
      setCount(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <p>{count ? count.toLocaleString() : "Loading..."}</p>
    </main>
  );
}
