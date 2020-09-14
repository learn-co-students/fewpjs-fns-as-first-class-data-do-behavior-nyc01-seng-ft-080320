/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function displayMessage(){
  document.getElementById("greeting").innerText = greet(document.querySelector('#time').value)
}

function greet(time){
  let hour = time.split(":")//?
  hour = hour[0]
  if (hour < 12) {
    console.log("Good Morning")
    return "Good Morning"
  }
  if (hour >= 12 && hour < 17 ) {
    return "Good Afternoon"
  }
  if (hour >= 17) {
    console.log("Good Evening")
    return "Good Evening"
  }
}



// today_date = new Date()
// current_time = today_date.getHours() + ":" + today_date.getMinutes() 
// current_time
// greet(current_time)//?




/* Write your implementation of displayMessage() */
// let form = document.getElementById('#time')
// document.getElementById("greeting").innerHTML = greet(document.querySelector('#time').value)

// let form = document.getElementById("timeinput");
// let input = ""
// document.getElementById("timeinput-submit").addEventListener("click", function () {
//   // input = document.querySelector('#time').value
//   // document.getElementById("greeting").innerHTML = greet(document.querySelector('#time').value)
//   displayMessage()
//   form.submit();
// });