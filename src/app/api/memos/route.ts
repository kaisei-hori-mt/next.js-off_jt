import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const dummyData = [
  { id: 1, title: "メモ1" },
  { id: 2, title: "メモ2" },
];

export async function GET() {
  return NextResponse.json(dummyData);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newMemo = {
    id: dummyData.length + 1,
    title: body.title ?? "(無題)",
  };
  dummyData.push(newMemo);
  return NextResponse.json({ success: true, message: "登録完了" });
}
