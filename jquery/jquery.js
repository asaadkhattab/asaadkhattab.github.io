/* JQuery */

/* Mobile Menu */


/*******************************************************************************
Background Change on Welcome div
*******************************************************************************/
/* Change the colors */
$(".button-color").on("click", "li", function (){
  $(this).siblings().removeClass("background-color-selected");
  $(this).addClass("background-color-selected");
  color = $(this).css("background-color");

});

const myHeading = document.getElementById('#welcome-page');

myHeading.addEventListener('click', () => {
  myHeading.style.color= 'red';
});
