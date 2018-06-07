// business logic

var answer = function(display) {
for (i=1; i<=display; i++) {
  // if the number is divisible by 15, write "pingpong"
if (i % 15 === 0) {
  $(".number").append("<li>"+"pingpong"+ "</>")
    //Return "pingpong";
}
// if the number is divisible by 3, write "ping"
else if (i % 3 === 0) {
  console.log("pingpong")
$(".number").append("<li>"+"ping"+ "</>")
//Return "ping";
}
// if the number is divisible by 5, write "pong"
else if (i % 5 === 0) {
$(".number").append("<li>"+"pong"+ "</>")
  //Return "pong";
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
 if (i % 15 === 0) {
  return "PingPong";
 }else if (i % 3 === 0) {
  return "Ping";
} else if (i % 5 === 0) {
  return "Pong";
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


'use strict';

var index = angular.module('app.index', ['index.factory']);

index.controller('indexController', ['indexFactory', function (indexFactory) {

    var data = this;

    data.functions = {
      getFeed: function () {
        indexFactory.getJSON(function (response) {
          data.feed = response.index;
        });
      }
    };

    this.functions.getFeed();
  }

]);

index.directive('cardInteractions', [ function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.rate = function(action, value) {
        var check_up = element.find('input')[0];
        var check_down = element.find('input')[1];
        if (action === 'upvote') {
          if (check_down.checked === true) {
              check_down.checked = false;
          }
        } else {
          if (action === 'downvote') {
            if (check_up.checked === true) {
              check_up.checked = false;
            }
          }
        }
      }
    }
  };
}]);
