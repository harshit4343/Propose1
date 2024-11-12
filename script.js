let audioPlaying = false;
const audio = document.getElementById('bgMusic');

function toggleMusic() {
    if (audioPlaying) {
        audio.pause();
        audioPlaying = false;
        document.querySelector('.music-control').textContent = '🎵';
    } else {
        audio.play();
        audioPlaying = true;
        document.querySelector('.music-control').textContent = '⏸️';
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

function moveButton(btn) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    let newX = Math.random() * (containerRect.width - btn.offsetWidth);
    let newY = Math.random() * (containerRect.height - btn.offsetHeight);
    
    newX = Math.max(0, Math.min(newX, containerRect.width - btn.offsetWidth));
    newY = Math.max(0, Math.min(newY, containerRect.height - btn.offsetHeight));
    
    btn.style.position = 'absolute';
    btn.style.left = newX + 'px';
    btn.style.top = newY + 'px';
}

function sayYes() {
    const container = document.querySelector('.container');
    const message = document.getElementById('special-message');
    const buttons = document.querySelector('.buttons');
    const question = document.querySelector('.question');
    const gallery = document.querySelector('.gallery');
    
    buttons.style.display = 'none';
    question.style.display = 'none';
    gallery.style.display = 'none';
    message.classList.remove('hidden');
    
    // Create heart shower effect
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }

    message.style.opacity = '1';
    
    // Start celebration music
    if (audio) {
        audio.src = 'celebration-music.mp3';
        audio.play();
        audioPlaying = true;
    }
}

// Create periodic floating hearts
setInterval(createHeart, 2000);

// Handle mobile touch events
document.addEventListener('touchstart', function(e) {
    if (e.target.classList.contains('btn-no')) {
        moveButton(e.target);
    }
}, false);

// Initialize AOS
AOS.init();