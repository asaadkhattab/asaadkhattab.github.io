/* SLICK CAROUSEL JQUERY PLUGIN */
$(document).ready(function(){
  $('.carousel').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    dots: true,
  });
});

/* ANIMSITION PLUGIN */
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-right',
    outClass: 'fade-out-right',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
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
