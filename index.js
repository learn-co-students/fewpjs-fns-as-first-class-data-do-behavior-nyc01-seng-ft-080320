/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hour = time.substr(0,2);
  if ( parseInt(hour) < 12 ){
    return 'Good Morning';
  }else if(parseInt(hour) < 17){
    return 'Good Afternoon';
  }else{
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(text) {
  const content = document.getElementById("greeting").innerText = text;
}
