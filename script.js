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
    }, 50);

}

function moveScreen() {
    const container = document.getElementById('.Container');
    container.style.animation = 'moveLeft 1s linear forwards';
    setTimeout(() => {
        container.style.animation = 'none';
    }, 1000);
}








 





  






