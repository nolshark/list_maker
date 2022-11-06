$(document).ready(()=>{
    $("#submitBtn").on("click", function(event){
        event.preventDefault()
        var name = $("#name").val().trim();
        var title = $("#title").val().trim();   
        var list_contents = $("#description").val().trim();
        var comments = $("#comments").val().trim();
        var date = $("#date").val().trim();

        var newActivity = {
            name: name,
            title: title,
            list_contents: list_contents,
            comments: comments,
            date: date,
        }
        postActivity(newActivity);
    });

function postActivity(newActivity) {
    var queryUrl = "/api/posts";
    $.post(queryUrl, newActivity, function(data){
        console.log("New post data: ", data);
        window.location.href = "/bucketlist"
    })
}
})