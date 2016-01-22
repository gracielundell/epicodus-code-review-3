var pingPong = function(countTo) {
  var array = []
  for (var i = 1; i <= countTo; i ++) {
    if (i % 3 === 0 && i % 5 ===0) {
      array.push("pingpong");
    } else if (i % 3 === 0) {
      array.push("ping");
    } else if (i % 5 === 0) {
      array.push("pong");
    } else {
      array.push(i);
    }
  }
  console.log(array);
  return array;
};


$(document).ready(function() {
  $("form").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    $(".result").text(pingPong(countTo));

    event.preventDefault();
  });
});
