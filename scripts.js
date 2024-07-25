
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
});



document.addEventListener('DOMContentLoaded', () => {
    const leftLine = document.querySelector('.left-line');
    const rightLine = document.querySelector('.right-line');

    function createStar(line, direction) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;

        if (direction === 'left') {
            star.style.left = '0';
            star.style.animation = `starTwinkle 2s ease-out forwards, starMoveLeft 2s ease-out forwards`;
        } else {
            star.style.right = '0';
            star.style.animation = `starTwinkle 2s ease-out forwards, starMoveRight 2s ease-out forwards`;
        }

        line.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000);
    }

    setInterval(() => {
        createStar(leftLine, 'left');
        createStar(rightLine, 'right');
    }, 200);
});



