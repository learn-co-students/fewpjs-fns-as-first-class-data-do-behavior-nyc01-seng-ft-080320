/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(string) {
  const time = parseInt(string, 10);
  if (time > 17) return "Good Evening";
  else if (time < 12) return "Good Morning";
  else return "Good Afternoon";
}



function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}

