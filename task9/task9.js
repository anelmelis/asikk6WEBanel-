$(document).ready(function() {

    $("#startBtn").click(function() {

        $("#box").stop(true).css({
            width: "150px",
            height: "150px",
            left: "0px",
            top: "0px"
        });



        $("#box").animate({
            left: "500px"
        }, 1000);




        $("#box").animate({
            top: "250px"
        }, 1000);



        $("#box").animate({
            width: "50px",
            height: "50px"
        }, 1000);



        $("#box").animate({
            left: "0px",
            top: "0px",
            width: "150px",
            height: "150px"
        }, 1000);

    });

});
