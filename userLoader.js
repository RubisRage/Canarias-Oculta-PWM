$(document).ready(function(){
    var username;
    var profilePicture;
    $.getJSON('assets/userTest.json', function (data) {
        username=data.username;
        profilePicture=data.profilePicture;
    });
    $("title").text(username);
    $("#header").load('assets/navbar.html');
    $("#userCard").load('assets/UserCard.html', function () {
        $(".userCard").children("h1").text(username);
        $(".userCard").children("img").attr("src", profilePicture);
    });
    $.getJSON('assets/longTest.json', function(data) {
        $.each(data, function (key, val) {
            $("#articles").append("<article></article>");
            $("#articles article").last().load('assets/articleSummary.html', function () {
                $(".articleResumeLong").last().children("h2").text(val.title);
                $(".articleResumeLong").last().children("p").text(val.content.slice(0,300)+"...");
                $(".articleResumeLong").last().children("img").attr("src", val.imageURL);
                $(".articleResumeLong").last().children("img").attr("alt", val.altText);
            });
        })
    });
    $("#footer").load('assets/footerTestHTML.html');
});