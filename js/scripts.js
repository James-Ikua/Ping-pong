// business logic

var answer = function(display) {
for (i=1; i<=display; i++) {
// if the number is divisible by 3, write "ping"
if (i % 3 === 0) {
  console.log("pingpong")
$(".number").append("<li>"+"ping"+ "</>")
//Return "ping";
}
// if the number is divisible by 5, write "pong"
else if (i % 5 === 0) {
$(".number").append("<li>"+"pong"+ "</>")
  //Return "pong";
}
// if the number is divisible by 15, write "pingpong"
else if (i % 15 === 0) {
  $(".number").append("<li>"+"pingpong"+ "</>")
    //Return "pingpong";
}
else {
  console.log("Walker");
  $(".number").append("<li>"+i+"</>")
}
}
};

$(document).ready(function() {
$("form#ping-pong").submit(function(event) {
event.preventDefault();
$(".number").empty()
var interger = parseInt($("input#value").val());
var result = pingpong(value);
$("#result").text(result);
})
})

// business logic
var pingpong = function(value) {
for (var i=0; i<=30; i++) {
if (i % 3 === 0) {
  return "Ping";
} else if (i % 5 === 0) {
  return "Pong";
} else if (i % 15 === 0) {
  return "PingPong";
}
}
};

// user interface logic
$(document).ready(function() {
$("form#ping-pong").submit(function(event) {
event.preventDefault();
var year = parseInt($("input#value").val());
var result = pingpong(value);

$("#result").show();
})
})
