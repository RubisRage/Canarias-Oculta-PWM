$(document).ready(function(){
    var title;
    var content;
    $.getJSON("assets/test.json", function (data) {
        title=data.title;
        content=data.content;
    });
    $("title").text(title);
    $("#header").load('assets/navbar.html');
    $("#article").load('assets/articlePage.html', function () {
        $(".longArticle h1").text(title);
        $("#imgLongArticle").attr("src","https://dam.ngenespanol.com/wp-content/uploads/2019/06/montana-perfecta_Matterhorn_-770x395.png");
        $(".longArticle p").text(content);
    });
    $("#footer").load('assets/footerTestHTML.html');
});