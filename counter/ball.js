function moveBall(ball) {
    let position = 0;
    let amplitude = 50; // Adjust the amplitude of the wave
    const frequency = 0.1; // Adjust the frequency of the wave
  
    const interval = setInterval(() => {
      ball.style.top = amplitude * Math.sin(frequency * position) + 'px';
      ball.style.left = position + 'px';
  
      position += 5; // Adjust this value to control the speed of movement
  
      if (position >= window.innerWidth) {
        clearInterval(interval); // Stop the movement at a certain point
        ball.style.display = 'none'; // Hide the ball after reaching the edge
      }
    }, 50); // Time interval for each movement update (milliseconds)
  }
//   sin function

function moveBall(ball) {
    let positionX = Math.random() * (0.9 * window.innerWidth);
    let positionY = Math.random() * (0.9 * window.innerHeight);
    let velocityX = 5; // Initial velocity on X-axis
    let velocityY = 5; // Initial velocity on Y-axis
    ball.style.setProperty("--top", `${positionX}px`);
    ball.style.setProperty("--left", `${positionY}px`);
    const interval = setInterval(() => {
      // Update the ball's position based on the velocity
        positionX += velocityX;
        // positionY += velocityY;
    
      // Update the ball's position
      ball.style.left = positionX + "px";
      ball.style.top = positionY + "px";
  
      // Check if the ball hits the window's boundaries
      if (
        positionX >= window.innerWidth * 0.992 - ball.offsetWidth ||
        positionX <= 0.01 * window.innerWidth
      ) {
        velocityX = -velocityX; // Reverse the X-axis velocity on hitting the window edges
      }
  
      if (
        positionY >= window.innerHeight * 0.99 - ball.offsetHeight ||
        positionY <= 0.015 * window.innerHeight
      ) {
        velocityY = -velocityY; // Reverse the Y-axis velocity on hitting the window edges
      }
    }, 5); // Time interval for each movement update (milliseconds)
  }


