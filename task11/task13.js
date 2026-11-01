$(document).ready(function() {

    let isRunning = false;
    let direction = 1;

    // Function to move the ball
    function bounceBall() {

        if (!isRunning) return;

        let target;

        if (direction === 1) {
            target = 520; // Move right
        } else {
            target = 0; // Move left
        }

        $("#ball").animate({
            left: target + "px"
        }, 1500, function() {

            if (isRunning) {

                // Change direction
                direction *= -1;

                // Continue moving
                bounceBall();
            }

        });

    }

    // Start animation
    $("#startBtn").click(function() {

        if (!isRunning) {
            isRunning = true;
            bounceBall();
        }

    });

    // Stop animation
    $("#stopBtn").click(function() {

        isRunning = false;
        $("#ball").stop(true, false);

    });

    // Reset ball position
    $("#resetBtn").click(function() {

        isRunning = false;

        $("#ball").stop(true, false).css({
            left: "0px"
        });

        direction = 1;

    });

});
