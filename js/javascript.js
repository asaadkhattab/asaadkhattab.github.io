/*Javascript and jQuery*/

/*
MENU OPTIONS FOR MOBILE DISPLAY
*/
var $select = $("<select></select>");
$(".navigation").append($select);

//Cycle over menu links
$(".navigation a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

  //Bind change listener to the select
  $select.change(function(){
  window.location = $select.val();
});


/*
SLICK CAROUSEL JQUERY PLUGIN
*/

$(document).ready(function(){
  $('.carousel').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    dots: true,
  });
});

/*
SLICK CAROUSEL JQUERY PLUGIN
*/

function fortuneCookie(range) {
  this.range = range;
  this.breakCookie = function () {
    var randomNumber = Math.floor(Math.random() * this.range) + 1;
    return randomNumber;
  }
}

function lotto(number) {
  var placeholder = document.getElementById("lottoDisplay");
  placeholder.innerHTML = number;
}

/* button */
var button = document.getElementById("fortune-button");
button.onclick = function() {
  var number = new fortuneCookie(49);
  var total = " ";
  for (var i = 0; i < 6; i++) {
    total += number.breakCookie() + "  ";
  }
  lotto(total);
};
