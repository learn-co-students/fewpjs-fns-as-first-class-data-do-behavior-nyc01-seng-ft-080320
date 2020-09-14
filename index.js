/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hr = time.split(':')[0];
  hrInt = parseInt(hr, 10);
  if ( hrInt < 12 ) return "Good Morning";
  if ( hrInt > 17 ) return "Good Evening";
  return "Good Afternoon";
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}