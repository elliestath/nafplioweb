//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for collapsable nav
$(function () {
    $(".navbar-toggle").blur(function () {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $(".navbar-collapse.in").collapse('hide');
            }
    });

   /* $(".navbar-toggle").click(function (event) {
        $(event.target).focus();
          });*/
});


/*<!--     <script>
    //hidden menu by default, strange behaviour!!!!!!
        $(function () {
            $(".navbar-collapse").click(function() {
                $(".navbar-collapse").collapse('hide');
            });
        });
    </script> -->*/

