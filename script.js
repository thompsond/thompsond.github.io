$(document).ready(function() {
    var date = new Date();
    $("footer p").html(`&copy;${date.getFullYear()} Darren Thompson`);

    $("nav #menu-btn").click(function() {
        $("#close-btn").css("display", "inline-block");
        $("#menu-btn").css("display", "none");
        $("#sidebar").css({ "left": "0px" });
    });

    $("nav #close-btn").click(function() {
        $("#menu-btn").css("display", "inline-block");
        $("#close-btn").css("display", "none");
        $("#sidebar").css("left", "-100vw");
    });

    $(".nav-link").click(function(event) {
        $(".nav-link").removeClass("selected");
        $(this).addClass("selected");
        $("nav #close-btn").click();
    });
});