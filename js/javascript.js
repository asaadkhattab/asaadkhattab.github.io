
/* SLICK CAROUSEL JQUERY PLUGIN */
$(document).ready(function(){
  $('.carousel').slick({
    fade: true,
    /*autoplay: true,*/
    /* autoplaySpeed: 3000,*/
    pauseOnHover:true,
    dots: true,
  });
});

/* MENU OPTIONS FOR MOBILE DISPLAY */
var $select = $("<select></select>");
$(".navigation").append($select);
$(".navigation a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option>");
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});
  $select.change(function(){
  window.location = $select.val();
});
