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


function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}


$('#scroll_to_projects').on('click', () => {
    console.log('clicked')
    $('#projects')[0].scrollIntoView({behavior: "smooth"})
});

//Change navbar to fixed when under 768px

//Initial load
if ($(window).width() < 992) {
    $('#splashBar').removeClass("sticky-top")
    $('#splashBar')[0].style.backgroundColor = "transparent"
    $('#splashBar').addClass("fixed-top")
    console.log("shrunk")
}

 function changeNavBarType() {
    if ($(window).width() < 992) {
        $('#splashBar').removeClass("sticky-top")
        $('#splashBar')[0].style.backgroundColor = "transparent"
        $('#splashBar').addClass("fixed-top")
        console.log("shrunk")
     }
     else {
        $('#splashBar').removeClass("fixed-top")
        $('#splashBar')[0].style.backgroundColor = "white"
        $('#splashBar').addClass("sticky-top")
        console.log("grew")
     }
  }
  
  window.onresize = changeNavBarType;