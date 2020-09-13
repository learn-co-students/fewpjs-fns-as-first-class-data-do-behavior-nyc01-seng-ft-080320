/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  let t = string[0] + string[1];
  let time = parseInt(t);
  if(time < 12) {
    return "Good Morning";
  } if(time <= 17 || time == 12) {
    return "Good Afternoon";
  } return "Good Evening";
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}