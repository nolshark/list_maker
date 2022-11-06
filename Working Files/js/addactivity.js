$(document).ready(()=>{
    var detailsCol = $("#detailsCol")

    $(".activity-button").on("click", function(event) {
        event.preventDefault();
        detailsCol.css("display", "block");
        $("#category").val($(this).data("catego"));
    });

    $("#date").datepicker({
        format: "mm/dd/yyyy",
        autoclose: true
    });
});