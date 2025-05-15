document.getElementById("form").addEventListener("submit", (event) => {
	event.preventDefault();

	// 入力情報の取得
	const inputName = document.getElementById("inputName");
	const inputAge = document.getElementById("inputAge");
	const inputJob = document.getElementById("inputJob");
	const inputIntroduce = document.getElementById("inputIntroduce");

	// 入力情報のオブジェクト化
	const inputArray = {
		name: inputName.value,
		age: inputAge.value,
		job: inputJob.value,
		introduce: inputIntroduce.value,
	};

	// バリデーションチェック
	if (inputArray.name === "") {
		alert("名前を入力してください");
	}
	if (Number.isNaN(inputArray.age)) {
		alert("年齢は数字で入力してください");
	} else if (inputArray.age < 18) {
		alert("年齢が18歳未満です");
	}

	// コンソールへの入力値の出力
	console.log(JSON.stringify(inputArray, null, 2));
});
