$(document).ready(function(){
    var title = window.localStorage.getItem("title");
    var content;
    var imgURL;
    $.getJSON("assets/longTest.json", function (data) {
        $.each(data, function (key, val) {
            if (val.title == title) {
                content = val.content;
                imgURL = val.imageURL;
                return;
            }
        })
    });
    $("title").text(title);
    $("#header").load('assets/navbar.html');
    $("#article").load('assets/articlePage.html', function () {
        $(".longArticle h1").text(title);
        $("#imgLongArticle").attr("src",imgURL);
        $(".longArticle p").text(content);
    });
    $("#footer").load('assets/footerTestHTML.html');
});