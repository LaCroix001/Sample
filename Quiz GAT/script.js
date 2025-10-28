// File: script.js

// Pastikan data.js dimuat, sehingga quizData global sudah tersedia (120 soal)
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
const timeDisplay = document.getElementById('time-display');

let currentQuestionIndex = 0;
let userAnswers = []; // Menyimpan jawaban yang dipilih
let timerInterval;

// --- KONSTANTA PENTING ---
// Waktu ujian total (dalam menit). 120 soal, kita anggap 1 soal 1 menit.
const TOTAL_TIME_MINUTES = 120; 
const TOTAL_QUESTIONS = quizData.length;

// --- INISIASI DAN TIMER ---

function startTimer() {
    let totalSeconds = TOTAL_TIME_MINUTES * 60;

    const updateTime = () => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timeDisplay.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert('Waktu ujian habis! Hasil akan ditampilkan.');
            showResults();
            return;
        }

        totalSeconds--;
    };

    updateTime(); // Panggil pertama kali agar langsung muncul
    timerInterval = setInterval(updateTime, 1000);
}


function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null); // Reset jawaban
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
    reviewContainer.innerHTML = '<h3>Review Jawaban dan Pembahasan:</h3>';
    
    // Mulai timer
    clearInterval(timerInterval);
    startTimer();

    showQuestion();
}

// --- FUNGSI UTAMA SOAL ---

function showQuestion() {
    const currentData = quizData[currentQuestionIndex];
    
    // Tampilkan Subjek dan Nomor Soal
    subjectInfoElement.textContent = `Subjek: ${currentData.subject}`;
    questionNumberElement.textContent = `Soal ${currentQuestionIndex + 1} dari ${TOTAL_QUESTIONS}`;
    questionElement.textContent = currentData.question;
    optionsElement.innerHTML = '';

    // Tampilkan Pilihan Jawaban
    currentData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });

    // Tandai jawaban yang sudah dipilih
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedOption = userAnswers[currentQuestionIndex];
        const buttons = optionsElement.querySelectorAll('.option-btn');
        buttons.forEach(button => {
            if (button.textContent === selectedOption) {
                button.classList.add('selected');
            }
        });
    }

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
    // Simpan jawaban
    userAnswers[currentQuestionIndex] = answer;

    // Tandai tombol yang dipilih
    const buttons = optionsElement.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.classList.remove('selected');
        if (button.textContent === answer) {
            button.classList.add('selected');
        }
    });
}


function nextQuestion() {
    // Pindah ke soal berikutnya
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}


function showResults() {
    // Hentikan timer dan tampilkan hasil
    clearInterval(timerInterval);
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    // Hitung skor
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

        // Konten HTML untuk review
        let htmlContent = `
            <p><strong>Subjek:</strong> ${questionData.subject}</p>
            <p><strong>Soal ${index + 1}:</strong> ${questionData.question}</p>
            
            <p>Jawaban Anda: 
                <span class="${isCorrect ? 'user-correct' : 'user-incorrect'}">
                    ${userAnswer || '(Tidak dijawab)'}
                </span>
            </p>
        `;
        
        // Tampilkan Jawaban Benar jika salah atau tidak dijawab
        if (!isCorrect) {
             htmlContent += `
                <p>Jawaban Benar: <span class="correct-answer-text">${correctAnswer}</span></p>
            `;
        }

        // Tampilkan Pembahasan
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

// Mulai kuis saat halaman dimuat
document.addEventListener('DOMContentLoaded', startQuiz);