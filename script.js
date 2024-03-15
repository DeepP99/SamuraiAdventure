document.addEventListener('keydown', function(spacebarDown) {
    if (spacebarDown.code === 'Space') {
        jump();
    }
});

function jump() {
    const samurai = document.querySelector('.samurai');
    samurai.style.animation = 'none';
    setTimeout(() => {
        samurai.style.animation = `jumpAnimation 0.5s ease`;
    })

}

function moveRight() {
    const samurai = document.querySelector('.samurai');
    samurai.style.animation = 'moveRightAnimation 0.5s linear forwards';
}





