// Define a global variable to hold the jump count
let jumpCount = 0;

document.addEventListener('keydown', function(spacebarDown) {
    if (spacebarDown.code === 'Space') {
        jump();
    }
});

// Event listener for mouse click
document.addEventListener('click', function(event) {
    // Restart the game if the alert message is clicked
    if (event.target.classList.contains('restart-game')) {
        startGame(); // Restart the game
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

    console.log("Samurai:", samuraiRect);
    console.log("Obstacle:", obstacleRect);
    

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

// function stopGame() {
//     clearInterval(isAlive);
//     const obstacle = document.querySelector('#obstacle');
//     obstacle.style.animation = 'none';

//     const samurai = document.querySelector('#samurai');
//     samurai.style.animation = 'none';

//     alert('Game Over! Samurai collided with obstacle.');
// }

function stopGame() {
    clearInterval(isAlive);
    const obstacle = document.querySelector('#obstacle');
    obstacle.style.animation = 'none';

    const samurai = document.querySelector('#samurai');
    samurai.style.animation = 'none';

    // Display alert message with a clickable button to restart the game
    const alertMessage = 'Game Over! Samurai collided with obstacle. Click to restart';
    alert(alertMessage);

    // Update the alert message to be clickable
    document.querySelector('.alert').classList.add('restart-game');
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


























