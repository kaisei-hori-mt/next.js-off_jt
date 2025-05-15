// 「読み込み中...」の表示
document.getElementById("loading").style.display = "block";

// 初期画面表示のイベント設定
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM が完全に読み込まれました！");
	fetchData();
});

async function fetchData() {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();

		const newList = document.createElement("ul");
		for (const item of data) {
			const listItem = document.createElement("li");
			listItem.textContent = item.name;
			newList.appendChild(listItem);
		}

		// 「読み込み中...」を非表示にする
		document.getElementById("loading").style.display = "none";
		document.getElementById("container").appendChild(newList);
	} catch (error) {
		alert("エラーが発生しました");
		console.error("error", error);
		document.getElementById("loading").style.display = "none";
	}
}
