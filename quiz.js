const quizData = [
    {
        question: "What is the average length of a menstrual cycle?",
        a: "30 days",
        b: "24 days",
        c: "27 days",
        d: "28 days",
        correct: "d",
    },
    {
        question: "What is the average length of menstrual bleeding?",
        a: "2 days",
        b: "4 days",
        c: "3 days",
        d: "5 days",
        correct: "b",
    },
    {
        question: "What is the most common age for menopause to occur?",
        a: "45 years",
        b: "40 years",
        c: "35 years",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "What can cause irregular menstrual cycles?",
        a: "Hormonal imbalace",
        b: "All options are correct",
        c: "Thyroid problem",
        d: "Stress",
         correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})