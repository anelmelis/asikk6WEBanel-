$(document).ready(function() {

    $("#changeImageBtn").click(function() {
        $("#myImage").attr("src", "../task6/carcarcar.jpg");
    });


    $("#changeLinkBtn").click(function() {
        $("#myLink").attr("href", "https://freepacman.org");

        $("#myLink").text("Visit Pacman");
    });





    $("#resetBtn").click(function() {
        $("#myImage").attr("src", "../task6/uyuy.jpg");
        $("#myLink").attr("href", "https://dinorunner.com");
        $("#myLink").text("Visit Dino Website");

    });

});
