const question = [
    {
        question: "Bagaimana cara mendeklarasikan variabel di JavaScript sebelum ES6?",
        Answer: [
            {text: "var", correct: true},
            {text: "let", correct: false},
            {text: "const", correct: false},
            {text: "Semua jawaban benar", correct: false},
        ]
    },
    {
        question: "Manakah metode array di JavaScript yang digunakan untuk menambahkan elemen di akhir array?",
        Answer: [
            {text: "push()", correct: true},
            {text: "shift()", correct: false},
            {text: "pop()", correct: false},
            {text: "unshift()", correct: false},
        ]
    },
    {
        question: "Apa nilai yang akan dikembalikan oleh kode berikut? console.log(2 + '2');",
        Answer: [
            {text: "4", correct: false},
            {text: "22", correct: true},
            {text: "error", correct: false},
            {text: "undefined", correct: false},
        ]
    },
    {
        question: "Manakah pernyataan yang benar tentang == dan === di JavaScript?",
        Answer: [
            {text: " == membandingkan nilai tanpa memeriksa tipe data, sedangkan === memeriksa tipe data dan nilai", correct: true},
            {text: "== memeriksa tipe data dan nilai, sedangkan === hanya memeriksa nilai", correct: false},
            {text: " Keduanya memiliki fungsi yang sama", correct: false},
            {text: "Keduanya tidak digunakan dalam perbandingan", correct: false},
        ]
    },
    {
        question: "Bagaimana cara membuat fungsi di JavaScript?",
        Answer: [
            {text: "function myFunction {}", correct: false},
            {text: "function myFunction() {}", correct: true},
            {text: "func myFunction {}", correct: false},
            {text: "create myFunction()", correct: false},
        ]
    },
]

const questionElement = document.getElementById('question');
const answerBtn  = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.Answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect  = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block"
}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();