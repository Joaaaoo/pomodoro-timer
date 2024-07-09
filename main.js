let timer;
let isRunning = false;
let timeLeft = 25 * 60;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

function updateTimer() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;
	minutesElement.textContent = minutes.toString().padStart(2, "0");
	secondsElement.textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
	if (!isRunning) {
		isRunning = true;
		startButton.textContent = "Pause";
		timer = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
				updateTimer();
			} else {
				clearInterval(timer);
				isRunning = false;
				startButton.textContent = "Start";
			}
		}, 1000);
	} else {
		clearInterval(timer);
		isRunning = false;
		startButton.textContent = "Start";
	}
}

function resetTimer() {
	clearInterval(timer);
	isRunning = false;
	timeLeft = 25 * 60;
	updateTimer();
	startButton.textContent = "Start";
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

updateTimer();
