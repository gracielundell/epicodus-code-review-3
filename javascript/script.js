function reg() {
  window.captureEvents(Event.SUBMIT);
  window.onsubmit = hit;
}

function hit(evt) {
  evt.preventDefault();

  document.getElementById("pingpongcode").innerHTML = ""

  var ul = document.createElement("ul");

  // var userNumber = (userinput) //from BS input box

  for(var i = 1; i <= 20; i++) {
    var li = document.createElement("li");

      if (i % 3 === 0 && i % 5 ===0) {
        li.innerHTML = "pingpong";
      }
      else if (i % 3 === 0) {
        li.innerHTML = "ping";
      }
      else if (i % 5 === 0) {
        li.innerHTML = "pong";
      }
      else {
        li.innerHTML = i;
      }
    ul.appendChild(li)
  }

  document.getElementById("pingpongcode").appendChild(ul);
}
