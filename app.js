function Question(id, text, options, answer) {
	this.id = id;
	this.text = text;
	this.options = options;
	this.answer = answer;

	let checkAnswer = (choice) => {
		return this.answer === choice;
	};

	this.calculateScore = (choice) => {
		if (!checkAnswer(choice)) {
			return -5;
		}
		return 20;
	};
}

const questionBank = [];

let q1 = new Question(
	"Q1",
	"What is the Capital of India?",
	["Delhi", "Mumbai", "Chennai", "Kolkata"],
	"Delhi"
);
let q2 = new Question(
	"Q2",
	"What is the full form of WWW?",
	["World Wide Web", "World Web Wide", "World Website Wide", "Wide World Web"],
	"World Wide Web"
);
let q3 = new Question(
	"Q3",
	"Who is the Captain of India Cricket?",
	["Virat Kohli", "Jasprit Bumrah", "Shikhra Dhawan", "Rohit Sharma"],
	"Virat Kohli"
);
let q4 = new Question(
	"Q4",
	"Who is PM of India?",
	["Naresh", "Devendra", "Narendra", "Sundendra"],
	"Narendra"
);

let q5 = new Question(
	"Q5",
	"Which of the following is not programming language?",
	["C++", "Java", "JavaScript", "React"],
	"React"
);

questionBank.push(q1);
questionBank.push(q2);
questionBank.push(q3);
questionBank.push(q5);
questionBank.push(q4);
