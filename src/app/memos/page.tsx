"use client";
import Link from "next/link";
import useSWR from "swr";

type Memo = {
  id: number;
  title: string;
};

export default function MemosPage() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/memos", fetcher);
  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラーが発生しました</p>;
  return (
    <main>
      <p>これはmemosページです</p>
      <ul>
        {data.map((memo: Memo) => (
          <li key={memo.id}>{memo.title}</li>
        ))}
      </ul>
      <Link href="/">Homeに戻る</Link>
    </main>
  );
}
