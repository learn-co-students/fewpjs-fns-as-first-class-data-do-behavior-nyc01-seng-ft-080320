/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    let timeNum = parseInt(time.split(':')[0]);

    if (timeNum < 12){
        return "Good Morning";
    } else if (timeNum >= 12 && timeNum < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
   let display = document.getElementById("greeting");
   display.innerText = string;
}
