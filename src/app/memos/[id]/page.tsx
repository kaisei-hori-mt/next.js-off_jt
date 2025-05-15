import Link from "next/link";

export const metadata = {
	title: "MemoIDページ",
};

export default async function MemoPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return (
		<main>
			{id ? <p>このページのIDは {id} です</p> : <p>IDが見つかりません</p>}
			<ul>
				<li>
					<Link href="/memos">Memosに戻る</Link>
				</li>
				<li>
					<Link href="/">Homeに戻る</Link>
				</li>
			</ul>
		</main>
	);
}
