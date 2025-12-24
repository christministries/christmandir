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

/* --- HEAVY CHRISTMAS SNOW --- */
if (document.getElementById('snow-container')) {
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 2 + 2 + 's'; // 2-4s fall
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        const size = Math.random() * 6 + 2 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;
        
        document.getElementById('snow-container').appendChild(snowflake);
        setTimeout(() => snowflake.remove(), 4000);
    }
    setInterval(createSnowflake, 60); // Heavier frequency
}

/* --- FIREWORKS --- */
if (document.getElementById('fireworks-container')) {
    function launchFirework() {
        const container = document.getElementById('fireworks-container');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.4);
        const colors = ['#ff0000', '#00ff00', '#ffffff', '#ffff00', '#00ffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 15; i++) {
            const p = document.createElement('div');
            p.classList.add('firework-particle');
            p.style.backgroundColor = color;
            p.style.left = x + 'px'; p.style.top = y + 'px';
            const angle = (Math.PI * 2 / 15) * i;
            const velocity = Math.random() * 80 + 40;
            p.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            p.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            container.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        }
    }
    setInterval(launchFirework, 2000);
}

/* --- MODALS --- */
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
window.onclick = (e) => { if(e.target.className === 'modal') closeRoadmapModal(); };

// Set Year
if(document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
