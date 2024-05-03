"use strict";

(function () {
  var screen = document.querySelector('.screen');
  var buttons = document.querySelectorAll('.btn');
  var equal = document.querySelector('.btn-equal');
  var clear = document.querySelector('.btn-clear');
  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      var value = e.target.dataset.num;

      if (typeof value != "undefined") {
        screen.value = screen.value + value;
      }
    });
  });
  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = "Please enter";
    } else {
      var answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clear.addEventListener('click', function (e) {
    screen.value = "";
  });
})();