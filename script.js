document.addEventListener('keydown', function(spacebarDown) {

    if (spacebarDown.code === 'Space') {
        jump();
    }

});

document.addEventListener('keydown', function(arrowDown) {
    const samurai = document.querySelector('.samurai');

    if (arrowDown.code === 'ArrowLeft') {
        moveLeft();
    } else if (arrowDown.code === 'ArrowRight') {
        moveRight();
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

function moveLeft() {
    const samurai = document.querySelector('.samurai');
    samurai.style.animation = 'moveLeftAnimation 0.5s linear forwards';
}





