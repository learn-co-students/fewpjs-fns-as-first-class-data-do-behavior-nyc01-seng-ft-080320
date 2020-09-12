/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){

    const timeSplit = time.split(":").join("")
    const parsedTime = parseInt(timeSplit)

    if (parsedTime < 1200){
        return "Good Morning"
    } else if (parsedTime < 1700 && parsedTime > 1200){
        return "Good Afternoon"
    } else {
        return "Good Evening"
    }
}

function displayMessage(string){
    const greeting = document.getElementById('greeting')
    greeting.innerText = string
}
/* Write your implementation of displayMessage() */
