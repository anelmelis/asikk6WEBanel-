$(document).ready(function() {

    $("#showBtn").click(function() {
        $("#gallery").fadeIn(1000);
    });

    
    $("#hideBtn").click(function() {
        $("#gallery").fadeOut(1000);
    });

    
    $(".photo").click(function() {

        let image = $(this);

        if (!image.hasClass("enlarged")) {

            image.addClass("enlarged");

            image.stop(true).animate({
                width: "300px",
                height: "240px"
            }, 500);

        } else {

            image.removeClass("enlarged");

            image.stop(true).animate({
                width: "150px",
                height: "120px"
            }, 500);

        }

    });

});

