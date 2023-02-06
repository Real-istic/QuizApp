let maxQ = questions.length;
let currentQuestion = 0;
let rightAnswers = 0;

let answerField1 = document.getElementById('answer1');
let answerField2 = document.getElementById('answer2');
let answerField3 = document.getElementById('answer3');
let answerField4 = document.getElementById('answer4');

let AUDIOsuccess = new Audio('sounds/success.mp3');
let AUDIOfail = new Audio('sounds/fail.mp3');

function init() {

    document.getElementById('maxQcount').innerHTML = `${maxQ}`;
    document.getElementById('currentQCount').innerHTML = `${currentQuestion + 1}`;
    if (currentQuestion >= 8) {
        insertHTML();
    }
    statusBar();
    showQuestion();
}

function insertHTML() {
    let cardBody = document.getElementById('cardBody');
    cardBody.innerHTML =/*html*/ `
        <div class="final-screen">
            <h1>Quiz beendet! </h1>
            <img src="img/Group 5.png" alt="">
            <br>
            <h5>Du hast ${rightAnswers} von ${maxQ} Fragen beantwortet</h5>
            <br>
            <button class="btn btn-primary" onclick="restart()">Quiz neu starten</button>
        </div>
        `;
    alert('Gratulation!');
    return;
}

function statusBar() {
    let progressBar = document.getElementById('progressBar').style;
    let width = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.width = width + "%";
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question.question;

    showAnswers(question);
}

function showAnswers(question) {

    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');
    let answer4 = document.getElementById('answer4');

    answer1.innerHTML = question.answer1
    answer2.innerHTML = question.answer2
    answer3.innerHTML = question.answer3
    answer4.innerHTML = question.answer4
}

function answer(ans) {

    let question = questions[currentQuestion];
    let answerField = document.getElementById('answer' + ans);
    let correctAnswer = document.getElementById('answer' + question.right_answer);

    if (ans == question.right_answer) {
        deactivateAnswerFields();
        answerField.classList.add('text-bg-success')
        rightAnswers++;
        document.getElementById('nextButton').disabled = false;
        AUDIOsuccess.play();
        // init()
    } else {
        deactivateAnswerFields();
        correctAnswer.classList.add('text-bg-success');
        answerField.classList.add('text-bg-danger');
        document.getElementById('nextButton').disabled = false;
        AUDIOfail.play();
    }
}

function deactivateAnswerFields() {
    
        answerField1.classList.add("disabled");
        answerField2.classList.add("disabled");
        answerField3.classList.add("disabled");
        answerField4.classList.add("disabled");

}

function activateAnswerFields(){

        answerField1.classList.remove("disabled");
        answerField2.classList.remove("disabled");
        answerField3.classList.remove("disabled");
        answerField4.classList.remove("disabled");
}

function nextQuestion() {
    activateAnswerFields();

    const answerCards = document.getElementsByClassName('quiz-answer-card');
    for (let answerCard of answerCards) {
        answerCard.classList.remove('text-bg-success');
        answerCard.classList.remove('text-bg-danger');
    }
    document.getElementById('nextButton').disabled = true;
    currentQuestion++;

    init()
}

function restart() {
    window.location.replace("index.html");
}