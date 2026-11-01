$(document).ready(function() {

    
    $("#name").on("input", function() {
        let name = $("#name").val();
        $("#nameOutput").text(name);
    });

    
    $("#email").on("input", function() {
        let email = $("#email").val();
        $("#emailOutput").text(email);
    });

});
