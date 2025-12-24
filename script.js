/* --- SCROLL ANIMATION --- */
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

/* --- SNOWFALL --- */
if (document.getElementById('snow-container')) {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.width = snowflake.style.height = Math.random() * 5 + 2 + 'px';
        document.getElementById('snow-container').appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 5000);
    }
    setInterval(createSnowflake, 100);
}

/* --- MODAL LOGIC --- */
function openRoadmapModal(title, desc, imgSrc) {
    const modal = document.getElementById('roadmap-modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-img').src = imgSrc;
    modal.style.display = 'flex';
}

function closeRoadmapModal() {
    document.getElementById('roadmap-modal').style.display = 'none';
}

// Global Year
const yearSpan = document.getElementById('year');
if(yearSpan) yearSpan.innerText = new Date().getFullYear();
