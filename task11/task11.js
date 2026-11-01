$(document).ready(function() {

    $(".accordion-header").click(function() {

        let content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).stop(true, true).slideUp(400);

        content.stop(true, true).slideToggle(400);

    });

});
