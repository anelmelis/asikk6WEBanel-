$(document).ready(function() {

    $("#animateBtn").click(function() {
        $("#box").stop(true).animate({
            width: "+=100px",
            height: "+=100px",
            left: "+=100px"
        }, 500);
    });

    $("#resetBtn").click(function() {
        $("#box").stop(true).animate({
            width: "-=100px",
            height: "-=100px",
            left: "-=100px"
        }, 500);
    });

});