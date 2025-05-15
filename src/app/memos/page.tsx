import Link from "next/link";

export const metadata = {
	title: "Memosページ",
};

// ダミーデータ
const memoIDs: string[] = ["123", "456", "789"];

export default function Memo() {
	return (
		<main>
			<p>これはmemosページです</p>
			<ul>
				{memoIDs.map((id) => {
					return (
						<li key={id}>
							<Link href={`/memos/${id}`}>メモID: {id}</Link>
						</li>
					);
				})}
			</ul>
			<Link href="/">Homeに戻る</Link>
		</main>
	);
}
