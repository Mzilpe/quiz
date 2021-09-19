const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const mainContainer = document.querySelector(".container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const buttons = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal-container");
const table = document.getElementById("table");
const closeModal = document.querySelector(".close-modal");
const again = document.querySelector(".again");
// const inputbox = document.querySelector(".inputbox");
// const nameInput = document.getElementById("nameInput");
// const body = document.getElementsByTagName("BODY")[0];
// const buttonA = document.querySelector(".btn-a");
// const buttonB = document.querySelector(".btn-b");
// const buttonC = document.querySelector(".btn-c");
// const buttonD = document.querySelector(".btn-d");

let shuffledQuestions;
let startIndex = 0;
let totalNoOfQuestions;
let totalScore = 0;
let quizSummary = [];
let playerName;
// const path =
// 	"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

startButton.addEventListener("click", startGame);

function startGame() {
	// makeGetRequest(path);

	// playerName = nameInput.nodeValue;
	// console.log(nameInput);
	totalNoOfQuestions = questionBank.length;
	startButton.classList.add("hide");
	nextButton.classList.remove("hide");
	// inputbox.classList.add("hide");
	shuffledQuestions = questionBank[startIndex];
	questionContainerElement.classList.remove("hide");
	setNextQuestion();
}

nextButton.addEventListener("click", () => {
	if (startIndex < totalNoOfQuestions - 1) {
		startIndex++;
		setNextQuestion();
	} else {
		modal.classList.remove("hide");
		// body.classList.add("bcolor");

		mainContainer.classList.add("hide");
		quizSummary.forEach((obj) => {
			console.log(obj);
			const tableRow = document.createElement("tr");
			const sr = document.createElement("td");
			sr.innerHTML = obj.sr;
			tableRow.appendChild(sr);
			obj.data.forEach((val) => {
				console.log(val);
				const tableData = document.createElement("td");
				tableData.innerText = val;
				tableRow.appendChild(tableData);
			});
			const empty = document.createElement("tr");
			tableRow.appendChild(empty);
			table.appendChild(tableRow);
		});
		quizSummary = [];
	}
});

function setNextQuestion() {
	nextButton.disabled = true;
	buttons.forEach((button) => {
		button.disabled = false;
		button.classList.remove("correct");
		button.classList.remove("wrong");
	});
	shuffledQuestions = questionBank[startIndex];
	showQuestion(shuffledQuestions);
}

function showQuestion(question) {
	questionElement.innerText = `${question.id}. ${question.text}`;
	question.options.forEach((answer, index) => {
		buttons[index].innerText = answer;
		buttons[index].setAttribute("id", answer);
		// switch (index) {
		// 	case 0:
		// 		buttonA.innerText = answer;
		// 		buttonA.setAttribute("data", answer);
		// 		break;
		// 	case 1:
		// 		buttonB.innerHTML = answer;
		// 		buttonB.setAttribute("data", answer);
		// 		break;
		// 	case 2:
		// 		buttonC.innerHTML = answer;
		// 		buttonC.setAttribute("data", answer);
		// 		break;
		// 	case 3:
		// 		buttonD.innerHTML = answer;
		// 		buttonD.setAttribute("data", answer);
		// 		break;
		// }
	});
}
let sr = 0;
function checkAnswer(val) {
	buttons.forEach((button) => {
		button.disabled = true;
	});
	nextButton.disabled = false;
	const score = shuffledQuestions.calculateScore(val);
	const selectedAns = document.getElementById(val);
	if (score > 0) {
		selectedAns.classList.add("correct");
		totalScore += score;
	} else {
		selectedAns.classList.add("wrong");
		// body.classList.add("wrong");
		totalScore += score;
	}
	console.log(score);
	buttons.forEach((button) => {
		button.disabled = true;
	});

	summaryObject = {
		sr: startIndex + 1,
		data: [
			shuffledQuestions.text,
			shuffledQuestions.answer,
			val,
			score,
			totalScore,
		],
	};

	quizSummary.push(summaryObject);
	// const score = shuffledQuestions.calculateScore(val);
	// console.log(score);
	// switch (val) {
	// 	case "a":
	// 		buttonA.classList.add("correct");
	// 		const ans = buttonA.getAttribute("data");
	// 		const score = shuffledQuestions.calculateScore(ans);
	// 		break;
	// 	case "b":
	// 		buttonB.classList.add("correct");
	// 		break;
	// 	case "c":
	// 		buttonC.classList.add("correct");
	// 		break;
	// 	case "d":
	// 		buttonD.classList.add("correct");
	// 		break;
	// }
	// buttonA.disabled = true;
	// buttonB.disabled = true;
	// buttonC.disabled = true;
	// buttonD.disabled = true;
}

// function makeGetRequest(path) {
// 	axios.get(path).then(
// 		(response) => {
// 			var result = response.data;
// 			console.log(result);
// 		},
// 		(error) => {
// 			console.log(error);
// 		}
// 	);
// }

again.addEventListener("click", () => {
	startIndex = 0;
	startButton.classList.remove("hide");
	nextButton.classList.add("hide");
	modal.classList.add("hide");
	mainContainer.classList.remove("hide");
	startGame();
	quizSummary = [];
});
