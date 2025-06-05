import { type NextRequest, NextResponse } from "next/server";

// メモデータのモック保存先（ファイル外部ではなく、リクエスト間で共有しない擬似状態）
const memos = [
  { id: 1, title: "最初のメモ" },
  { id: 2, title: "次のメモ" },
];

// GET: 一覧取得
export async function GET() {
  return NextResponse.json(memos);
}

// POST: 新規メモ追加（受け取ったデータを配列に追加）
export async function POST(req: NextRequest) {
  const body = await req.json();

  const newMemo = {
    id: memos.length + 1,
    title: body.title ?? "(無題)",
  };

  memos.push(newMemo);

  return NextResponse.json({ success: true, memo: newMemo });
}
