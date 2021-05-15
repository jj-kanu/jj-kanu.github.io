!function(e) {
    "use strict";

    // Dropdown Slide Courtesy of Adam Macias at https://codepen.io/adammacias/pen/dozPVQ
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    // Scroll For SplashBar Projects
    $('#scroll_to_projects').on('click', () => {
        console.log('clicked')
        $('#projects')[0].scrollIntoView({behavior: "smooth"})
    });

    // Make Table of Contents Fade
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $(window).width();
        if (y > 50 && x > 1440) {
            $("#table_of_contents").fadeIn();
        } else {
            $("#table_of_contents").fadeOut();
        }
    });

    // Table of Contents Scroll Height
    $("#table_of_contents .nav-link").click(function () {
      let lookup = $(this).attr("href");
      let element = lookup.slice(1);
      element = document.getElementById(element);
      const offset = 40;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      lookup = String(lookup);
      $("html, body").animate({ scrollTop: offsetPosition }, 200);
    });
    

    e(window).scroll(function() {
        e("#navBar").offset().top > 80 ? e("#navBar").addClass("navbar-shrink") : e("#navBar").removeClass("navbar-shrink")
    })

}(jQuery);