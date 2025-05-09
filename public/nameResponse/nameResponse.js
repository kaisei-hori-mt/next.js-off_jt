const input = document.getElementById("input");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
	if (input.value === "") {
		output.innerText = "名前を入力してください";
	} else {
		output.innerText = `こんにちは、${input.value}さん！`;
	}
});
