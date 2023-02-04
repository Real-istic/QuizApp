let maxQ = questions.length;
let currentQuestion = 0;

function init(answerField) {

    document.getElementById('maxQcount').innerHTML = `${maxQ}`;
    document.getElementById('currentQCount').innerHTML = `${currentQuestion + 1}`;
    showQuestion()
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

    if (ans == question.right_answer) {
        answerField.classList.add('text-bg-success')
        alert('😊 RICHTIG! 😊')
        return
    }
    answerField.classList.add('text-bg-danger')
    alert('☹ falsch ☹');
}