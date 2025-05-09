const countForm = document.getElementById("counter");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

let count = 0;

// +1ボタン押下時の処理
incBtn.addEventListener("click", () => {
	count++;
	countForm.textContent = count;
});
// -1ボタン押下時の処理
decBtn.addEventListener("click", () => {
	count--;
	countForm.textContent = count;
});
