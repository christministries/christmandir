/* --- SCROLL REVEAL --- */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

/* --- SNOW LOGIC --- */
if (document.getElementById('snow-container')) {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 2 + 3 + 's';
        snowflake.style.width = snowflake.style.height = Math.random() * 5 + 2 + 'px';
        document.getElementById('snow-container').appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 5000);
    }
    setInterval(createSnowflake, 100);
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Modal Roadmap
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
