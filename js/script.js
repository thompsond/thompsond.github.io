$(document).ready(function() {
    let date = new Date();
    $("footer #copyright").html(`&copy; ${date.getFullYear()} Darren Thompson`);

    $("nav #menu-btn").click(function() {
        $("#close-btn").css("display", "inline-block");
        $("#menu-btn").css("display", "none");
        $("#sidebar").css({ "left": "0px" });
    });

    $("nav #close-btn").click(function(event) {
        $("#menu-btn").css("display", "inline-block");
        $("#close-btn").css("display", "none");
        $("#sidebar").css("left", "-100vw");
    });

    $("ul.info-list > li").not("#projects-list > li").prepend('<span class="fa-li"><i class="fas fa-caret-right"></i></span>');
    $("#projects-list > li a").prepend('<span class="fa-li"><i class="fab fa-github"></i></span>');
    $("ul.sub-info-list li").prepend('<span class="fa-li"><i class="fas fa-minus"></i></span>');

    $(".nav-link").click(function(event) {
        $(".nav-link").removeClass("selected");
        $(this).addClass("selected");
        if ($("nav #close-btn").is(":visible")) {
            $("nav #close-btn").click();
        }
    });

    $(".home-link").click(function(event) {
        event.preventDefault();
        $(document).scrollTop(0);
    });

    $(".about-link").click(function(event) {
        event.preventDefault();
        let $val = $("#about").offset().top;
        let $offset = $("header").outerHeight(true);
        $(document).scrollTop($val - 10 - $offset);
    });

    $(".projects-link").click(function(event) {
        event.preventDefault();
        let $val = $("#projects").offset().top;
        let $offset = $("header").outerHeight(true);
        $(document).scrollTop($val - $offset);
    });

    $(".contact-link").click(function(event) {
        event.preventDefault();
        let $val = $("#contact-container").offset().top;
        let $offset = $("header").outerHeight(true);
        $(document).scrollTop($val - $offset);
    });

    let $computedHeight = $("header").outerHeight(true);
    let $combined = $computedHeight + "px";
    $("#sidebar").height(`calc(100vh - ${$combined})`).css("top", `${$combined}`);
    $("#side-nav-list").css("top", `calc(calc(50% - ${$combined}))`);
    $("#landing").height(`calc(100vh - ${$combined})`);
    $("#container").css("margin-top", `${$combined}`);
    $("#contact-container").css("margin-top", `${$combined}`);


});