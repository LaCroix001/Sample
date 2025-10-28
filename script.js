// File: script.js (Dengan Navigasi Cepat)

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-btn');
const reviewContainer = document.getElementById('review-container');
const questionNumberElement = document.getElementById('question-number');
const subjectInfoElement = document.getElementById('subject-info');
const questionListElement = document.getElementById('question-list'); // Elemen baru

let currentQuestionIndex = 0;
let userAnswers = [];
const TOTAL_QUESTIONS = quizData.length;

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    document.getElementById('quiz-sidebar').style.display = 'block'; // Tampilkan sidebar
    submitButton.style.display = 'none';
    
    reviewContainer.innerHTML = '<h3>Review Jawaban dan Pembahasan:</h3>';
    
    generateQuestionList(); // Buat daftar nomor soal
    showQuestion();
}

// --- FUNGSI NAVIGASI CEPAT ---
function generateQuestionList() {
    questionListElement.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const listItem = document.createElement('button');
        listItem.textContent = i + 1;
        listItem.classList.add('question-jump-btn');
        listItem.setAttribute('data-index', i);
        listItem.onclick = () => jumpToQuestion(i);
        questionListElement.appendChild(listItem);
    }
}

function jumpToQuestion(index) {
    if (index >= 0 && index < TOTAL_QUESTIONS) {
        currentQuestionIndex = index;
        showQuestion();
    }
}

function updateQuestionListStatus() {
    const jumpButtons = questionListElement.querySelectorAll('.question-jump-btn');
    jumpButtons.forEach((button, index) => {
        button.classList.remove('current', 'answered');

        // Tandai soal yang sedang dikerjakan
        if (index === currentQuestionIndex) {
            button.classList.add('current');
        } 
        
        // Tandai soal yang sudah dijawab
        if (userAnswers[index] !== null) {
            button.classList.add('answered');
        }
    });
}
// --- AKHIR FUNGSI NAVIGASI CEPAT ---


function showQuestion() {
    const currentData = quizData[currentQuestionIndex];
    
    subjectInfoElement.textContent = `Subjek: ${currentData.subject}`;
    questionNumberElement.textContent = `Soal ${currentQuestionIndex + 1} dari ${TOTAL_QUESTIONS}`;
    questionElement.textContent = currentData.question;
    optionsElement.innerHTML = '';

    currentData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });

    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedOption = userAnswers[currentQuestionIndex];
        const buttons = optionsElement.querySelectorAll('.option-btn');
        buttons.forEach(button => {
            if (button.textContent === selectedOption) {
                button.classList.add('selected');
            }
        });
    }

    // Perbarui status tombol navigasi
    updateQuestionListStatus();

    // Perbarui teks tombol Next/Submit
    if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.textContent = `Soal Berikutnya (${currentQuestionIndex + 2}/${TOTAL_QUESTIONS})`;
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;

    const buttons = optionsElement.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (button.textContent === answer) {
            button.classList.add('selected');
        }
    });
    
    // Perbarui status 'answered' pada sidebar setelah memilih jawaban
    updateQuestionListStatus();
}


function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}


function showResults() {
    quizContainer.style.display = 'none';
    document.getElementById('quiz-sidebar').style.display = 'none'; // Sembunyikan sidebar di hasil
    resultContainer.style.display = 'block';

    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    quizData.forEach((questionData, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = questionData.answer;

        if (userAnswer === null) {
            unansweredCount++;
        } else if (userAnswer === correctAnswer) {
            score++;
            correctCount++;
        } else {
            incorrectCount++;
        }
    });
    
    const percentage = ((score / TOTAL_QUESTIONS) * 100).toFixed(2);

    scoreText.innerHTML = `
        <p>Anda menjawab benar **${correctCount}** dari ${TOTAL_QUESTIONS} soal.</p>
        <p>Salah: **${incorrectCount}** | Tidak Dijawab: **${unansweredCount}**</p>
        <p class="final-score">Skor Akhir: **${score}** | Persentase: **${percentage}%**</p>
    `;

    generateReview();
}


function generateReview() {
    reviewContainer.innerHTML = '<h3>Review Jawaban dan Pembahasan:</h3>';

    quizData.forEach((questionData, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = questionData.answer;
        const isCorrect = userAnswer === correctAnswer;

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        let htmlContent = `
            <p><strong>Subjek:</strong> ${questionData.subject}</p>
            <p><strong>Soal ${index + 1}:</strong> ${questionData.question}</p>
            
            <p>Jawaban Anda: 
                <span class="${isCorrect ? 'user-correct' : 'user-incorrect'}">
                    ${userAnswer || '(Tidak dijawab)'}
                </span>
            </p>
        `;
        
        if (!isCorrect) {
             htmlContent += `
                <p>Jawaban Benar: <span class="correct-answer-text">${correctAnswer}</span></p>
            `;
        }

        htmlContent += `
            <p class="explanation-text"><strong>Pembahasan:</strong> ${questionData.explanation}</p>
        `;
        
        reviewItem.innerHTML = htmlContent;
        reviewContainer.appendChild(reviewItem);
    });
}

// --- EVENT LISTENERS ---
nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', showResults);
restartButton.addEventListener('click', startQuiz);

document.addEventListener('DOMContentLoaded', startQuiz);