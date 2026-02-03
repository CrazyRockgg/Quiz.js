/**
 * Computer Hardware Quiz Game - Web Version
 * 
 * A web-based quiz application that tests knowledge about computer hardware components.
 * Users answer questions about CPU, memory, storage, and other hardware parts.
 * 
 * @module game
 */

// Quiz questions about computer hardware
const quizQuestions = {
    "What is the brain of the computer?": "cpu",
    "Which component stores data permanently?": "hard drive",
    "What is the primary memory called?": "ram",
    "Which component processes graphics?": "graphics card",
    "What connects all components together?": "motherboard",
    "What is the power supply unit abbreviated as?": "psu",
    "Which device is used for optical disc reading?": "cd drive",
    "What is the small battery on the motherboard called?": "cmos battery",
    "Which component cools the CPU?": "heatsink",
    "What is used to input text and commands?": "keyboard",
    "Which device displays visual output?": "monitor",
    "What is the main circuit board called?": "motherboard",
    "Which port is used for connecting external devices?": "usb",
    "What stores data temporarily while the computer is on?": "ram",
    "What is the speed of the CPU measured in?": "ghz",
};

// Game state
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questions = [];

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const finalScoreValue = document.getElementById('final-score-value');
const resultMessage = document.getElementById('result-message');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');

// Initialize questions array
function initializeQuestions() {
    questions = Object.entries(quizQuestions).map(([question, answer]) => ({
        question,
        answer
    }));
    // Shuffle questions
    questions = shuffleArray(questions);
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Normalize user input for comparison
function normalizeAnswer(input) {
    return typeof input === "string" ? input.toLowerCase().trim() : "";
}

// Show a specific screen
function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    screen.classList.add('active');
}

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    initializeQuestions();
    showQuestion();
    showScreen(quizScreen);
}

// Display current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerInput.value = '';
    answerInput.disabled = false;
    feedback.className = 'feedback';
    feedback.textContent = '';
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    
    // Update progress
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    progressFill.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Focus input
    answerInput.focus();
}

// Check the answer
function checkAnswer() {
    const userAnswer = normalizeAnswer(answerInput.value);
    const correctAnswer = normalizeAnswer(questions[currentQuestionIndex].answer);
    
    answerInput.disabled = true;
    
    if (userAnswer === correctAnswer) {
        score++;
        correctAnswers++;
        feedback.textContent = "That's correct!! 🎉";
        feedback.className = 'feedback correct';
    } else {
        score--;
        wrongAnswers++;
        feedback.textContent = `That's wrong! The correct answer is: ${questions[currentQuestionIndex].answer}`;
        feedback.className = 'feedback wrong';
    }
    
    // Update score display
    scoreDisplay.textContent = `Score: ${score}`;
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    nextBtn.focus();
}

// Go to next question or show results
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display final results
function showResults() {
    progressFill.style.width = '100%';
    finalScoreValue.textContent = score;
    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;
    
    // Generate result message based on score
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage >= 87) {
        message = "🏆 Excellent! You're a Hardware Expert!";
    } else if (percentage >= 67) {
        message = "🌟 Very Good! You know your hardware well!";
    } else if (percentage >= 47) {
        message = "👍 Good job! Keep learning!";
    } else if (percentage >= 27) {
        message = "📚 Not bad! Room for improvement.";
    } else {
        message = "💪 Keep studying! You'll get better!";
    }
    
    resultMessage.textContent = message;
    showScreen(resultScreen);
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);

// Allow Enter key to submit or go to next question
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !answerInput.disabled) {
        checkAnswer();
    }
});

// Handle Enter key on next button
nextBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        nextQuestion();
    }
});
