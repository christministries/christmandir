// 1. Set Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Daily Verse Logic (Only runs on Verse page)
const dateDisplay = document.getElementById('date-display');
if(dateDisplay) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
}

// 3. Quiz Logic (Only runs on Quiz page)
if (document.getElementById('quiz-box')) {
    const quizData = [
        { question: "Who built the Ark?", options: ["Moses", "Noah", "David", "Abraham"], correct: "Noah" },
        { question: "What is the first book of the Bible?", options: ["Exodus", "Genesis", "Matthew", "Psalms"], correct: "Genesis" },
        { question: "How many days did it take God to create the world?", options: ["3 Days", "7 Days", "6 Days", "40 Days"], correct: "6 Days" },
        { question: "Who defeated Goliath?", options: ["Saul", "David", "Solomon", "Samuel"], correct: "David" },
        { question: "Where was Jesus born?", options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"], correct: "Bethlehem" }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        document.getElementById('quiz-box').style.display = 'block';
        document.getElementById('quiz-results').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        
        const currentQuizData = quizData[currentQuestionIndex];
        document.getElementById('quiz-question').innerText = currentQuizData.question;
        document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
        document.getElementById('score-display').innerText = `Score: ${score}`;

        const answerButtonsElement = document.getElementById('answer-buttons');
        answerButtonsElement.innerHTML = ''; 

        currentQuizData.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('quiz-btn');
            button.onclick = () => selectAnswer(option, currentQuizData.correct, button);
            answerButtonsElement.appendChild(button);
        });
    }

    function selectAnswer(selected, correct, btnElement) {
        const allButtons = document.querySelectorAll('.quiz-btn');
        allButtons.forEach(btn => btn.disabled = true);
        if (selected === correct) {
            btnElement.classList.add('correct');
            score++;
        } else {
            btnElement.classList.add('wrong');
            allButtons.forEach(btn => {
                if (btn.innerText === correct) btn.classList.add('correct');
            });
        }
        document.getElementById('score-display').innerText = `Score: ${score}`;
        document.getElementById('next-btn').style.display = 'block';
    }

    window.loadNextQuestion = function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz-box').style.display = 'none';
            document.getElementById('quiz-results').style.display = 'block';
            document.getElementById('final-score').innerText = `${score} / ${quizData.length}`;
        }
    };

    window.restartQuiz = function() {
        currentQuestionIndex = 0;
        score = 0;
        loadQuiz();
    };

}
/* --- ROADMAP MODAL LOGIC --- */
function openRoadmapModal(title, desc, imgSrc) {
    const modal = document.getElementById('roadmap-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-img').src = imgSrc;
    
    modal.style.display = 'flex';
}

function closeRoadmapModal() {
    document.getElementById('roadmap-modal').style.display = 'none';
}

// Close modal if clicked outside box
window.onclick = function(event) {
    const modal = document.getElementById('roadmap-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Set Year
document.getElementById('year').textContent = new Date().getFullYear();
