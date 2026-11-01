$(document).ready(function() {

    $("#hideBtn").click(function() {
        $("#message").hide();
    });

    $("#showBtn").click(function() {
        $("#message").show();
    });

    $("#toggleBtn").click(function() {
        $("#message").toggle();
    });

});
