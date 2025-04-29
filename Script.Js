const questions = [
    {
        question: "🟩Complete. This is ________ confortable chair in the office",
        answers: [
                { id: 1, text: "less", correct: false},
                { id: 2, text: "the least", correct: true},
                { id: 3, text: "the least + adjetivo", correct: false},
                { id: 4, text: "more + adjetivo + than", correct: false},
            ]
    },
    {
        question: "🟩Qual dessas frases esta CORRETA?",
        answers: [
                { id: 1, text: "she is the less smart in the group", correct: false},
                { id: 2, text: "she is the least smart in the group", correct: true},
                { id: 3, text: "she is smart least of the group", correct: false},
                { id: 4, text: "she is less than the, smartest", correct: false},
            ]
    },
    {
        question: "🟩Complete a frase. He is _______ funny person at the party?",
        answers: [
            { id: 1, text: "the most", correct: false},
            { id: 2, text: "the more", correct: false},
            { id: 3, text: "the less", correct: false},
            { id: 4, text: "the least", correct: true},
        ]
    },
    {
        question: "🟩Qual é a estrutura correta do Superlativo de inferiodade?",
        answers: [
                { id: 1, text: "less + adjetivo + than", correct: false},
                { id: 2, text: "the more + adjetivo", correct: false},
                { id: 3, text: "the least + adjetivo", correct: true},
                { id: 4, text: "more + adjetivo + than", correct: false},
        ]
    },
    {
        question: "🟧Verdadeiro ou Falso, A estrutura (The Least + adjetivo) pode ser usada para I - otimizar criticas II - frases negativas",
        answers: [
                { id: 1, text: "Apenas a I é falsa", correct: false},
                { id: 2, text: "Apenas a II é Verdadeira", correct: false},
                { id: 3, text: "Ambas são falsas", correct: false},
                { id: 4, text: "Ambas são verdadeiras", correct: true},
        ]
    },
    {
        question: "🟧complete com as palavras que faltam 'lucas foi o jogador menos rapido no campo' 'Lucas was _______ player on the field'",
        answers: [
                { id: 1, text: "the least faster", correct: true},
                { id: 2, text: "the less faster", correct: false},
                { id: 3, text: "the more faster", correct: false},
                { id: 4, text: "the least ", correct: false},
        ]
    },
    {
        question: "🟧escolha a alternativa em que a frase esta CORRETA",
        answers: [
                { id: 1, text: "She is the less friendly in the team", correct: false},
                { id: 2, text: "She is the Least friendly in the team", correct: true},
                { id: 3, text: "She is the most friendly in the team", correct: false},
                { id: 4, text: "She is the more friendly in the team", correct: false},
        ]
    },
    {
        question: "🟧Escolha a frase CORRETA",
        answers: [
                { id: 1, text: "She is the less organized in the group", correct: false},
                { id: 2, text: "this book is the least boring i've ever read", correct: true},
                { id: 3, text: "He speaks the least intelligent", correct: false},
                { id: 4, text: "She works the less fast", correct: false},
        ]
    },
    {
        question: "🟥Qual frase expressa melhor o superlativo de inferiodade?",
        answers: [
                { id: 1, text: "he is less careful than john", correct: false},
                { id: 2, text: "He is the most careful", correct: false},
                { id: 3, text: "He is the least careful in the team", correct: true},
                { id: 4, text: "He is less careful one", correct: false},
        ]
    },
    {
        question: "🟥Marque a frase INCORRETA",
        answers: [
                { id: 1, text: "This is the least expensive item in the store", correct: false},
                { id: 2, text: "She is the least polite person at the table", correct: false},
                { id: 3, text: "He is less intelligent than her", correct: true},
                { id: 4, text: "That was the least boring class", correct: false},
        ]
    },
    {
        question: "🟥Qual das alternativas usa corretamente a estrutura com advérbio?",
        answers: [
                { id: 1, text: "She speaks the clearly in the group", correct: false},
                { id: 2, text: "She is the least speak clearly", correct: true},
                { id: 3, text: "She speaks less the clearly", correct: false},
                { id: 4, text: "She is the clearly less", correct: false},
        ]
    },
    {
        question: "🟥Complete a frase. 'Anoing all the playes, Lucas is _______'",
        answers: [
                { id: 1, text: "the less", correct: false},
                { id: 2, text: "less", correct: false},
                { id: 3, text: "the least", correct: true},
                { id: 4, text: "more", correct: false},
        ]
    },
    {
        question: "🟨Depois da apresentação, a professora disse: Of all the participants, _______ confident speaker of them all",
        type: "text",
        correctAnswer: "Lucas was the least"
    },    
]

const questionElement = document.getElementById("qst")
const answerButtons = document.getElementById("ans-btns")
const nextButton = document.getElementById("Prx")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
const backButton = document.getElementById("backBtn");

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    mudarCorTitulo(currentQuestionIndex);

    if (currentQuestion.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "text-answer";
        input.classList.add("input-text");
        answerButtons.appendChild(input);

        const submitButton = document.createElement("button");
        submitButton.innerText = "Responder";
        submitButton.classList.add("btn");
        submitButton.addEventListener("click", checkTextAnswer);
        answerButtons.appendChild(submitButton);
    } else {
        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            button.dataset.id = answer.id;
            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    if (currentQuestionIndex > 0) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

function handleBackButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

backButton.addEventListener("click", handleBackButton);

function normalizeText(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}

const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');


function checkTextAnswer() {
    const input = document.getElementById("text-answer");
    const userAnswer = normalizeText(input.value);
    const correctAnswer = normalizeText(questions[currentQuestionIndex].correctAnswer);

    if (userAnswer === correctAnswer) {
        input.classList.add("correct");
        score++;
        correctSound.play();
    } else {
        input.classList.add("incorrect");
        incorrectSound.play();
        const correction = document.createElement("p");
        correction.innerText = `Resposta correta: ${questions[currentQuestionIndex].correctAnswer}`;
        correction.classList.add("correction");
        answerButtons.appendChild(correction);
    }

    input.disabled = true;
    nextButton.style.display = "block";
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        correctSound.play();
    } else {
        selectedBtn.classList.add("incorrect");
        incorrectSound.play();
    }
    Array.from(answerButtons.children).forEach((Button) => {
        Button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

const titulo = document.getElementById("titulo-quiz");

function mudarCorTitulo(seEssaQuestao) {
  if (seEssaQuestao === 12) {
    titulo.style.color = "gold";
  } else {
    titulo.style.color = "dodgerblue";
  }
}


startQuiz();