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
        $(".userDataProfile").children("h1").text(username);
        $(".userDataProfile").children("img").attr("src", profilePicture);
    });
    $.getJSON('assets/longTest.json', function(data) {
        $.each(data, function (key, val) {
            $("#favourites").append("<article></article>");
            $("#favourites article").last().load('assets/articleCard.html', function () {
                $(".card div").last().children("h2").text(val.title);
                $(".card div").last().children("p").text(val.content.slice(0,300)+"...");
                $(".card").last().children("img").attr("src", val.imageURL);
                $(".card").last().children("img").attr("alt", val.altText);
            });
        })
    });
    $("#footer").load('assets/footerTestHTML.html');
});