$(document).ready(function() {

    $("#slideUpBtn").click(function() {
        $("#panel").slideUp(1000);
    });

    $("#slideDownBtn").click(function() {
        $("#panel").slideDown(1000);
    });

    $("#slideToggleBtn").click(function() {
        $("#panel").slideToggle(1000);
    });

});
