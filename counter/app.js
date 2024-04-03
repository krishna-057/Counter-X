const zero = document.querySelector(".ze");
const dec = document.querySelector(".a");
const res = document.querySelector(".b");
const inc = document.querySelector(".c");
const b1 = document.getElementById("button1");
const b2 = document.getElementById("button2");
const b3 = document.getElementById("button3");
const root = document.querySelector(":root");
const ball = document.getElementById("ball");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const gamecontainer = document.getElementById("gamecontainer");
const startgamebutton = document.getElementById("startgamebutton");
let isGameActivated = false;

function startGame() {
  if (!isGameActivated) {
    isGameActivated = true;
    gamecontainer.style.display = "block";
    startgamebutton.textContent = "Game mode activated";
    root.style.setProperty("--color", "yellow");
    for (let i = 1; i < 99; i++) {
      let j = i + "%";
      setTimeout(() => {
        root.style.setProperty("--height", j);
      }, i * 25);
    }
    startgamebutton.removeEventListener("click", startGame);
    startgamebutton.addEventListener("click", endGame);
  }
}

function endGame() {
  gamecontainer.style.display = "none";
  startgamebutton.textContent = "Game mode deactivated";
  startgamebutton.removeEventListener("click", endGame);
  startgamebutton.addEventListener("click", startGame);
  isGameActivated = false;
}

startgamebutton.addEventListener("click", startGame);
let ballcounter = 0;
inc.addEventListener("click", function () {
  let current_value = parseInt(zero.textContent, 10);
  let next_value = current_value + 1;
  zero.textContent = next_value.toString();
  if (next_value > 0) {
    if (255 - next_value > 110) {
      zero.style.color = `rgba(0, ${255 - next_value}, 0, ${
        0.5 + next_value / 25
      })`;
    } else {
      zero.style.color = `rgba(0, 110, 0, 1)`;
    }
  }
  if (next_value == 0) zero.style.color = "black";
  b3.classList.add("clicked");
  setTimeout(() => {
    b3.classList.remove("clicked");
  }, 100);
  // ball.style.setProperty("--col","cyan");
  if (isGameActivated) {
    addBall();
  }
});

function addBall() {
  // Create a new div element (representing a ball)
  const newBall = document.createElement("div");

  // Apply a CSS class or some styles to the ball element
  newBall.classList.add("ball");

  // Append the new ball element to the game container
  document.body.appendChild(newBall);
  moveBall(newBall);
}
// function moveBall(ball) {
//   let position = 30;
//   const interval = setInterval(() => {
//     ball.style.left = position + "px";
//     position += 5; // Adjust this value to control the speed of movement
//     if (position >= window.innerWidth) {
//       clearInterval(interval); // Stop the movement at a certain point
//     }
//   }, 50); // Time interval for each movement update (milliseconds)
// }
const wid = window.innerWidth;

function moveBall(ball) {
  let position = 100;
  let amplitude = 100; // Adjust the amplitude of the wave
  const frequency = 0.03; // Adjust the frequency of the wave
  let positionX = 200 + amplitude * Math.sin(frequency * position);
  ball.style.setProperty("--top", `${positionX}px`);
  ball.style.setProperty("--left", `${position}px`);
  const interval = setInterval(() => {
    position += 5; // Adjust this value to control the speed of movement

    positionX = 200 + amplitude * Math.sin(frequency * position);
    ball.style.top = positionX + "px";
    ball.style.left = position + "px";
    console.log(window.innerWidth);
    if (parseInt(ball.style.left) >= wid || parseInt(ball.style.left) <= 0) {
      console.log("yes");

      positionX = 200 + amplitude * Math.cos(frequency * position);
      // position=-position;
      // positionX = 200 + (-amplitude) * Math.sin(frequency * position); // Reverse the X-axis velocity on hitting the window edges
    }

    if (
      parseInt(ball.style.top) >= window.innerHeight - ball.offsetHeight ||
      parseInt(ball.style.top) <= 0
    ) {
      amplitude = -amplitude; // Reverse the Y-axis velocity on hitting the window edges
    }
  }, 50); // Time interval for each movement update (milliseconds)
}

// function moveBall(ball) {
//   let positionX = Math.random() * (0.9 * window.innerWidth);
//   let positionY = Math.random() * (0.9 * window.innerHeight);
//   let velocityX = 20; // Initial velocity on X-axis
//   let velocityY = 20; // Initial velocity on Y-axis
//   ball.style.setProperty("--top", `${positionX}px`);
//   ball.style.setProperty("--left", `${positionY}px`);
//   const interval = setInterval(() => {
//     // Update the ball's position based on the velocity
//       positionX += velocityX;
//       positionY += velocityY;

//     // Update the ball's position
//     ball.style.left = positionX + "px";
//     ball.style.top = positionY + "px";

//     // Check if the ball hits the window's boundaries
//     if (
//       positionX >= window.innerWidth * 0.992 - ball.offsetWidth ||
//       positionX <= 0.01 * window.innerWidth
//     ) {
//       velocityX = -velocityX; // Reverse the X-axis velocity on hitting the window edges
//     }

//     if (
//       positionY >= window.innerHeight * 0.99 - ball.offsetHeight ||
//       positionY <= 0.015 * window.innerHeight
//     ) {
//       velocityY = -velocityY; // Reverse the Y-axis velocity on hitting the window edges
//     }
//   }, 5); // Time interval for each movement update (milliseconds)
// }

dec.addEventListener("click", function () {
  let current_value = parseInt(zero.textContent, 10);
  let next_value = current_value - 1;
  zero.textContent = next_value.toString();
  if (next_value < 0) {
    if (255 - next_value > 110) {
      zero.style.color = `rgba(${255 - next_value}, 0, 0, ${
        0.5 + -next_value / 25
      })`;
    } else {
      zero.style.color = `rgba(110,0,0,1)`;
    }
  }
  if (next_value == 0) zero.style.color = "black";
  b1.classList.add("clicked");
  setTimeout(() => {
    b1.classList.remove("clicked");
  }, 100);
  
});

res.addEventListener("click", function () {
  let next_value = 0;
  zero.style.color = "black";
  zero.textContent = next_value.toString();
  b2.classList.add("clicked");
  setTimeout(() => {
    b2.classList.remove("clicked");
  }, 100);
});

// pATEL function
function patel() {
  let hex_color = "#";
  for (let i = 0; i < 6; i++) {
    const r_number = Math.floor(Math.random() * hex.length);
    hex_color += hex[r_number];
  }
  console.log(hex_color);
  // color.textContent = hex_color;
   ball.style.setProperty("--col", "yellow");
   
  // document.body.style.backgroundColor = hex_color;
}


