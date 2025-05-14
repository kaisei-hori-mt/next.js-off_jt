// 「読み込み中...」の表示
document.getElementById("loading").style.display = "block";

// 初期画面表示のイベント設定
document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM が完全に読み込まれました！");

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		// データ取得後の処理
		.then((data) => {
			const newList = document.createElement("ul");
			const dataList = data.map((item) => item.name);
			for (const name of dataList) {
				const listItem = document.createElement("li");
				listItem.textContent = name;
				newList.appendChild(listItem);
			}
			// データ取得完了後、「読み込み中...」を非表示し、データ一覧を表示する
			document.getElementById("loading").style.display = "none";
			document.getElementById("container").appendChild(newList);
		})
		.catch((error) => {
			alert("エラーが発生しました");
			console.error("error", error);
			document.getElementById("loading").style.display = "none";
		});
});
