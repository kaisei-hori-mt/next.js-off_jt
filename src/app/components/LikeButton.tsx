"use client";

import { useState } from "react";

export function LikeButton() {
	const [count, setCount] = useState(0);

	return (
		<button type="button" onClick={() => setCount(count + 1)}>
			いいね！{count}件
		</button>
	);
}
