// Define global variables
let jumpCount = 0; // Tracks the number of jumps made by the samurai
let isAliveInterval; // Holds the interval for collision detection



// Function to handle samurai jump
function jump() {

    const samurai = document.querySelector('#samurai'); // Select the samurai element
    samurai.style.animation = 'none'; // Stop any ongoing animation
    setTimeout(() => {
        samurai.style.animation = 'jumpAnimation 0.5s ease'; // Apply jump animation after a short delay
    }, 50);
    jumpCount++; // Increment jump count
    updateCounter(); // Update the displayed jump count
}



// Function to stop the game on collision
function stopGame() {

    clearInterval(isAliveInterval); // Stop the collision detection interval
    stopAnimation('#obstacle'); // Stop obstacle animation
    stopAnimation('#samurai'); // Stop samurai animation
    alertAndRestart('Game Over! Samurai collided with obstacle. Click to restart'); // Alert the player and prompt for restart
}



// Function to restart the game
function restartGame() {

    jumpCount = 0; // Reset jump count
    updateCounter(); // Update the displayed jump count
    restartAnimation('#obstacle', 'moveLeft 2s infinite linear'); // Restart obstacle animation
    moveCharacterToGround('#samurai'); // Move samurai character to the ground level
    addEventListeners(); // Add event listeners for gameplay
    clearInterval(isAliveInterval); // Clear any existing collision detection interval
    startCollisionDetection(); // Start collision detection after initializing the game
}



// Function to initialize the game
function startGame() {

    jumpCount = 0; // Reset jump count
    updateCounter(); // Update the displayed jump count
    moveCharacterToGround('#samurai'); // Move samurai character to the ground level
    addEventListeners(); // Add event listeners for gameplay
    startCollisionDetection(); // Start collision detection when the game starts
}



// Function to update jump count display
function updateCounter() {

    document.getElementById('counter').textContent = 'Jump Count: ' + jumpCount; // Update displayed jump count
}



// Function to stop animation of an element
function stopAnimation(selector) {

    document.querySelector(selector).style.animation = 'none'; // Stop animation of specified element
}



// Function to restart animation of an element
function restartAnimation(selector, animation) {

    const element = document.querySelector(selector); // Select the specified element
    element.style.animation = 'none'; // Stop any ongoing animation
    element.offsetHeight; // Trigger reflow to apply changes immediately
    element.style.animation = animation; // Restart animation with specified animation
}



// Function to move character to ground level
function moveCharacterToGround(selector) {

    document.querySelector(selector).style.bottom = '160px'; // Move character (samurai) to the ground level
}



// Function to add event listeners
function addEventListeners() {

    document.removeEventListener('keydown', handleSpacebarDown); // Remove existing event listener for spacebar keydown
    document.removeEventListener('click', handleRestartClick); // Remove existing event listener for restart click
    document.addEventListener('keydown', handleSpacebarDown); // Add event listener for spacebar keydown
    document.addEventListener('click', handleRestartClick); // Add event listener for restart click
}



// Function to handle spacebar press
function handleSpacebarDown(event) {

    if (event.code === 'Space') { // Check if the pressed key is the spacebar
        jump(); // Trigger samurai jump
    }
}



// Function to handle click on restart message
function handleRestartClick(event) {

    if (event.target.classList.contains('restart-game')) { // Check if the clicked element has the restart-game class
        restartGame(); // Restart the game if the restart message is clicked
    }
}



// Function to alert and restart game
function alertAndRestart(message) {

    alert(message); // Show an alert message
    document.querySelector('.alert').classList.add('restart-game'); // Add restart-game class to the alert message
    jumpCount = 0; // Reset jump count
    updateCounter(); // Update the displayed jump count
    restartAnimation('#obstacle', 'moveLeft 2s infinite linear'); // Restart obstacle animation
    startCollisionDetection(); // Start collision detection after restarting the game
}



// Function to start collision detection
function startCollisionDetection() {

    isAliveInterval = setInterval(checkCollision, 10); // Set up an interval to continuously check for collisions
}



// Function to check collision between samurai and obstacle
function checkCollision() {

    const samurai = document.querySelector('#samurai').getBoundingClientRect(); // Get bounding rectangle of samurai
    const obstacle = document.querySelector('#obstacle').getBoundingClientRect(); // Get bounding rectangle of obstacle
    if (samurai.right > obstacle.left && samurai.left < obstacle.right && // Check for collision between samurai and obstacle
        samurai.bottom > obstacle.top && samurai.top < obstacle.bottom) {
        stopGame(); // Stop the game if collision is detected
    }
}



// Initialize the game
startGame(); // Call startGame function to initialize the game when the script runs























































































