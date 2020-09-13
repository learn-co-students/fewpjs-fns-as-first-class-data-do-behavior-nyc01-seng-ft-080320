/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time_string) {
  let hour = parseInt(time_string.split(':')[0])
  let min = parseInt(time_string.split(':')[1])
  let tot_time = hour + min/60

  if (tot_time < 12) {
    return "Good Morning"
  } else if (tot_time >= 12 && tot_time <= 17) {
    return "Good Afternoon"
  } else if (tot_time > 17) {
    return "Good Evening"
  } else {
    return "Please enter time in HH:MM format"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}
