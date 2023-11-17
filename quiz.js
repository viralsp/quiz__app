const quizData = [

    {
        question: 'What is highest record of Rohit Sharma in ODI',
        a: '264',
        b: '206',
        c: '230',
        d: '150',
        correct: 'a'
    }, {
        question: 'What is most loved proramming Language in 2022',
        a: 'python',
        b: 'java',
        c: 'c++',
        d: 'html',
        correct: 'b'
    }, {
        question: 'Who is current INDIAN team captain',
        a: 'Virat Khohi',
        b: 'M S Dhoni',
        c: 'Rushabh Pant',
        d: 'Rohit Sharma',
        correct: 'd'
    }, {
        question: 'What is fullform of HTML',
        a: 'HYPER text markup language',
        b: 'cascading style sheet',
        c: 'Jasob object notation',
        d: 'hyper text makeup language',
        correct: 'a'
    }, {
        question: 'When was javascript launched',
        a: '1953',
        b: '1989',
        c: '1999',
        d: 'none of these',
        correct: 'd'
    }
];


const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const answerE1 = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerE1.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer
}

function deselectAnswer() {
    answerE1.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>you answered correctly ${score}/${quizData.length}<h2>`;
        }
    }
});