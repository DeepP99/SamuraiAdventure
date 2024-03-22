// Define a global variable to hold the jump count
let jumpCount = 0;

// Function for Jump functionality, that selects our samurai element, and then stops previous animation and starts a new one after a delay using setTimeout, and then it increments our jumpcount and updates it
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

// Function to stop the game when a collision between the samurai and obstacle is detected
function stopGame() {
    // Reset jump count to zero
    jumpCount = 0;
    
    // Clear the interval responsible for checking if the samurai is alive
    clearInterval(isAlive);

    // Select the obstacle element from the DOM and stop its animation
    const obstacle = document.querySelector('#obstacle');
    obstacle.style.animation = 'none';

    // Select the samurai element from the DOM and stop its animation
    const samurai = document.querySelector('#samurai');
    samurai.style.animation = 'none';

    // Display an alert message to notify the player that the game is over
    const alertMessage = 'Game Over! Samurai collided with obstacle. Click to restart';
    alert(alertMessage);

    restartGame();

    // Make the alert message clickable to restart the game
    // Add a CSS class to the alert message to make it visually distinct as a clickable element
    document.querySelector('.alert').classList.add('restart-game');
}

// Function to reset the jump counter
function resetCounter() {
    jumpCount = 0;
    updateCounter(); // Update the counter display
}

// Function to update the counter display
function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = 'Jump Count: ' + jumpCount;
}

// Function to restart the game
function restartGame() {
    // Reset jump count
    resetCounter();
    
    // Clear the interval responsible for checking if the samurai is alive
    clearInterval(isAlive);

    // Reset obstacle animation
    const obstacle = document.querySelector('#obstacle');
    obstacle.style.animation = 'none'; // Reset to default

    setTimeout(() => {
        obstacle.style.animation = 'moveLeft 2s infinite linear';
    }, 100)

    // Reset samurai animation
    const samurai = document.querySelector('#samurai');
    samurai.style.animation = ''; // Reset to default

    // Update counter display
    updateCounter();

    // Start the game again
    startGame();
}

// Function to start the game
function startGame() {
    // Move the samurai to the ground
    const samurai = document.querySelector('#samurai');
    samurai.style.bottom = '160px'; // Adjust this value as per your ground height

    // Start the obstacle animation
    const obstacle = document.querySelector('#obstacle');
    obstacle.style.animation = 'moveLeft 2s infinite linear'; // Adjust animation properties as needed
}

// Event listener for spacebar functionality
document.addEventListener('keydown', function(spacebarDown) {
    if (spacebarDown.code === 'Space') {
        jump();
    }
});

// Event listener for mouse click to restart game
document.addEventListener('click', function(event) {
    console.log("Click event triggered")
    // Restart the game if the alert message is clicked
    if (event.target.classList.contains('restart-game')) {
        restartGame(); // Restart the game
    }
});

// Interval function to check if the samurai character is alive by detecting collisions with obstacles
let isAlive = setInterval(function () {
    // Select the samurai and obstacle elements from the DOM
    const samurai = document.querySelector('#samurai');
    const obstacle = document.querySelector('#obstacle');

    // Get the bounding rectangles of the samurai and obstacle elements
    const samuraiRect = samurai.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    // Log the bounding rectangles for debugging purposes
    console.log("Samurai:", samuraiRect);
    console.log("Obstacle:", obstacleRect);

    // Check for collision between the samurai and the obstacle
    if (
        samuraiRect.right > obstacleRect.left &&  
        samuraiRect.left < obstacleRect.right &&  
        samuraiRect.bottom > obstacleRect.top &&  
        samuraiRect.top < obstacleRect.bottom     
    ) {
        // Collision detected, stop the game
        stopGame();  // Call the function to stop the game
    }
}, 10);  // Check for collision every 10 milliseconds

// Call startGame() to start the game
startGame();


























