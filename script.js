const questions = [
    {
        question:"1.What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyperlinking Text Management Language", correct: false }
        ]
    },
    {
        question: "2.Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "3.Which CSS property controls the text size?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "font-style", correct: false },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "4.What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "5.Which of the following is a JavaScript data type?",
        answers: [
            { text: "Number", correct: true },
            { text: "Float", correct: false },
            { text: "Character", correct: false },
            { text: "Decimal", correct: false }
        ]
    },
    {
        question: "6.Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "<!--", correct: false },
            { text: "#", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "7.What is the correct way to link a CSS file to HTML?",
        answers: [
            { text: '<link rel="stylesheet" href="style.css">', correct: true },
            { text: '<style src="style.css">', correct: false },
            { text: '<css link="style.css">', correct: false },
            { text: '<stylesheet>style.css</stylesheet>', correct: false }
        ]
    },
    {
        question: "8.Which JavaScript function is used to write on the browser console?",
        answers: [
            { text: "console.log()", correct: true },
            { text: "log.console()", correct: false },
            { text: "print()", correct: false },
            { text: "document.write()", correct: false }
        ]
    },
    {
        question: "9.What does DOM stand for?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Display Object Management", correct: false },
            { text: "Digital Ordinance Model", correct: false }
        ]
    },
    {
        question: "10.Which tag is used for JavaScript in HTML?",
        answers: [
            { text: "<script>", correct: true },
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<code>", correct: false }
        ]
    }

];

const startBtn = document.getElementById("start-btn");
const questionBox = document.getElementById("quiz-box");
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    questionBox.style.display = "block";
    startQuiz();
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    scoreContainer.innerText = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    answerButtons.innerHTML = '';
}

function selectAnswer(button, correct) {
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    if (correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerText = `Quiz Completed!`;
    scoreContainer.innerText = `Your Score: ${score}/${questions.length}`;
    nextButton.innerText = 'Restart';
    nextButton.style.display = 'block';
    nextButton.onclick = startQuiz;
}

       