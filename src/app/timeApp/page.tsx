"use client";
import { useEffect, useState } from "react";

export default function TimeAppPage() {
  const [count, setCount] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <p>
        {count
          ? count.toLocaleString("ja-JP", { hour12: false })
          : "Loading..."}
      </p>
    </main>
  );
}
