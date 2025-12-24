/* =========================================
   1. GLOBAL LOGIC (Runs on every page)
   ========================================= */

// Set Year in Footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger once on load

/* =========================================
   2. DAILY VERSE PAGE LOGIC
   ========================================= */
const dateDisplay = document.getElementById('date-display');
if (dateDisplay) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', options);
}

/* =========================================
   3. QUIZ PAGE LOGIC
   ========================================= */
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

/* =========================================
   4. HOME PAGE LOGIC (Roadmap & Snow)
   ========================================= */

// Roadmap Modal
function openRoadmapModal(title, desc, imgSrc) {
    const modal = document.getElementById('roadmap-modal');
    if (modal) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal-img').src = imgSrc;
        modal.style.display = 'flex';
    }
}

function closeRoadmapModal() {
    const modal = document.getElementById('roadmap-modal');
    if (modal) modal.style.display = 'none';
}

// Close modal if clicked outside content box
window.onclick = function(event) {
    const modal = document.getElementById('roadmap-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Christmas Snow Effect
if (document.getElementById('snow-container')) {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s fall speed
        snowflake.style.opacity = Math.random();
        snowflake.style.width = snowflake.style.height = Math.random() * 5 + 2 + 'px';
        
        const container = document.getElementById('snow-container');
        if(container) {
            container.appendChild(snowflake);
            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }
    }
    setInterval(createSnowflake, 100); // Create snow every 100ms
}
