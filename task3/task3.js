$(document).ready(function() {

    $("#fadeInBtn").click(function() {
        $("#myImage").fadeIn(1000);
    });

    $("#fadeOutBtn").click(function() {
        $("#myImage").fadeOut(1000);
    });

    $("#fadeToggleBtn").click(function() {
        $("#myImage").fadeToggle(1000);
    });

});
