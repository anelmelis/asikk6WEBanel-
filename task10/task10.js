$(document).ready(function() {

    $("#startBtn").click(function() {

        $("#box").stop(true).animate({
            width: "200px",
            height: "200px",
            left: "500px",
            opacity: 0.1
        }, 1500);

    });



    $("#resetBtn").click(function() {

        $("#box").stop(true).animate({
            width: "100px",
            height: "100px",
            left: "0px",
            opacity: 1
        }, 1000);

    });

});
