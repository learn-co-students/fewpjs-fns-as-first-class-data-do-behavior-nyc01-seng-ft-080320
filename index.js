/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let arrayTime = time.split(':') // variable arrayTime equal to time, then we call the .split method on it to split it by the ":" colon. 
  let hour = parseInt(arrayTime[0]) // variable named hour set to the return integer of arrayTime[0]
  if (hour < 12) { return "Good Morning" } // if hour is less than 12
  if (hour > 12 && hour < 17) { return "Good Afternoon" } // if between 12pm-5pm, if hour is greater than 12 and (&&) hour is less than 17
  if (hour > 17) { return "Good Evening" } // if 5pm, which on a 24hr clock would be 17. hour is greater than 17
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const newGreeting = document.getElementById('greeting') // grabs the element by the Id of "greeting"
  newGreeting.innerText = `${string}`   // Updates the text inside of greeting.
}