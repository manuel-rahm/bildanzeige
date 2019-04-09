$("#thumbnails img").on("click", function(){
    var source = $(this).attr("src");
    $("#photo-viewer img").attr("src", source);
})