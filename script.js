/* =========================================
   1. GLOBAL LOGIC & ANIMATIONS
   ========================================= */

// Set Year
if (document.getElementById('year')) {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Scroll Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

/* =========================================
   2. EXTREME CHRISTMAS EFFECTS
   ========================================= */

// HEAVY Snowfall
if (document.getElementById('snow-container')) {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        // Faster, heavier snow
        snowflake.style.animationDuration = Math.random() * 2 + 1.5 + 's'; 
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        // Larger varied sizes
        const size = Math.random() * 8 + 3 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;
        
        document.getElementById('snow-container').appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 4000);
    }
    setInterval(createSnowflake, 50); // Very frequent snow (50ms)
}

// Fireworks
if (document.getElementById('fireworks-container')) {
    function launchFirework() {
        const container = document.getElementById('fireworks-container');
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * (window.innerHeight * 0.4); // Top 40% of screen
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#cfa76e'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Create 20 particles per explosion
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('firework-particle');
            particle.style.backgroundColor = color;
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            // Random explosion direction
            const angle = (Math.PI * 2 / 20) * i;
            const velocity = Math.random() * 100 + 50;
            const tx = Math.cos(angle) * velocity + 'px';
            const ty = Math.sin(angle) * velocity + 'px';
            particle.style.setProperty('--tx', tx);
            particle.style.setProperty('--ty', ty);
            
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
    }
    // Launch a firework every 1.5 seconds
    setInterval(launchFirework, 1500);
}

/* =========================================
   3. PAGE SPECIFIC LOGIC (Verse, Quiz, Modals)
   ========================================= */

// Daily Verse Page
const dateDisplay = document.getElementById('date-display');
if (dateDisplay) {
    dateDisplay.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// Roadmap Modal
function openRoadmapModal(title, desc, imgSrc) {
    const modal = document.getElementById('roadmap-modal');
    if(modal) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal-img').src = imgSrc;
        modal.style.display = 'flex';
    }
}
function closeRoadmapModal() {
    const modal = document.getElementById('roadmap-modal');
    if(modal) modal.style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('roadmap-modal');
    if (event.target == modal) modal.style.display = "none";
}

// Quiz Logic (Kept for compatibility if quiz page exists)
if (document.getElementById('quiz-box')) {
    // ... (Your existing quiz logic here if needed) ...
}
