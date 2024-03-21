// Define a global variable to hold the jump count
let jumpCount = 0;

document.addEventListener('keydown', function(spacebarDown) {
    if (spacebarDown.code === 'Space') {
        jump();
    }
});

function jump() {
    const samurai = document.querySelector('#samurai');
    samurai.style.animation = 'none';
    setTimeout(() => {
        samurai.style.animation = 'jumpAnimation 0.5s ease';
    }, 50); 

    // Increment the jump count when the samurai jumps
    jumpCount++;
    updateCounter(); // Update the counter display
}

let isAlive = setInterval(function () {
    const samurai = document.querySelector('#samurai');
    const obstacle = document.querySelector('#obstacle');

    const samuraiRect = samurai.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    // Check for collision
    if (
        samuraiRect.right > obstacleRect.left &&
        samuraiRect.left < obstacleRect.right &&
        samuraiRect.bottom > obstacleRect.top &&
        samuraiRect.top < obstacleRect.bottom
    ) {
        // Collision detected, stop the game
        stopGame();
    }
}, 10);

function stopGame() {
    clearInterval(isAlive);
    const obstacle = document.querySelector('#obstacle');
    obstacle.style.animation = 'none';

    const samurai = document.querySelector('#samurai');
    samurai.style.animation = 'none';

    alert('Game Over! Samurai collided with obstacle.');
}

// Function to start the game
function startGame() {
    // Move the samurai to the ground
    const samurai = document.querySelector('#samurai');
    samurai.style.bottom = '160px'; // Adjust this value as per your ground height
}

// Function to update the counter display
function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = 'Jump Count: ' + jumpCount;
}

// Call startGame() to start the game
startGame();

  






 




 





  






