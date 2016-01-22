var pingPong = function(countTo) {
  var ul = document.createElement("ul");

  for (var i = 1; i <= countTo; i ++) {
    var li = document.createElement("li");

    if (i % 3 === 0 && i % 5 ===0) {
      li.innerHTML = "pingpong";
    } else if (i % 3 === 0) {
      li.innerHTML = "ping";
    } else {
      li.innerHTML = i;
    }
    console.log(li.innerHTML);
  }

};

















// function reg() {
//   window.captureEvents(Event.SUBMIT);
//   window.onsubmit = hit;
// }
//
// function hit(evt) {
//   evt.preventDefault();
//   var inputNumber = 10;
//   pingpong(inputNumber)
// }
//
// function pingpong(userNumber) {
//   document.getElementById("pingpongcode").innerHTML = ""
//
//   var ul = document.createElement("ul");
//
//   for(var i = 1; i <= userNumber; i++) {
//     var li = document.createElement("li");
//
//       if (i % 3 === 0 && i % 5 ===0) {
//         li.innerHTML = "pingpong";
//       }
//       else if (i % 3 === 0) {
//         li.innerHTML = "ping";
//       }
//       else if (i % 5 === 0) {
//         li.innerHTML = "pong";
//       }
//       else {
//         li.innerHTML = i;
//       }
//     ul.appendChild(li)
//   }
//
//   document.getElementById("pingpongcode").appendChild(ul);
// }
