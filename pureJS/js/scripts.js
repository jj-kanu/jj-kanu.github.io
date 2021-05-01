$(document).ready(function() {

    // Splash Picture
    // const splashPic = $("#splashPic")
    // splashPic.css("background-image","url(myhero.png)")
    // splashPic.css("height","900px")
    // splashPic.css("background-repeat","no-repeat")
    // splashPic.css("background-size","cover")
    // splashPic.css("position","relative")
});


// Dropdown Slide Courtesy of Adam Macias at https://codepen.io/adammacias/pen/dozPVQ
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});
  
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});