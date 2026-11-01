$(document).ready(function() {

    let itemNumber = 4;

    
    $("#addBtn").click(function() {
        itemNumber++;
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });


    
    $("#prependBtn").click(function() {
        itemNumber++;
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    
    
    $("#removeBtn").click(function() {
        $("#itemList li:last").remove();
    });

});
