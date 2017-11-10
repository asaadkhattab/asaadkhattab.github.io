/* FORTUNE COOKIE LOTTO NUMBER */

function fortuneCookie(range) {
  this.range = range;
  this.breakCookie = function () {
    var randomNumber = Math.floor(Math.random() * this.range) + 1;
    return randomNumber;
  }
}

var counter = 0;
while ( counter <= 6 ) {
  var number = new fortuneCookie(49);
  counter += 1;
}

function lotto(number) {
  var placeholder = document.getElementById("lottoDisplay");
  placeholder.innerHTML = number;
}

/* button */
var button = document.getElementById("fortune-button");
button.onclick = function() {

  var total = number.breakCookie();
  lotto(total);
};
