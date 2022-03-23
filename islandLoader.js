$(document).ready(function(){
    var first = true;
    $("#header").load('assets/navbar.html');
    $("main #verticalNavBar").load('assets/verticalNavbar.html');
    $.getJSON('assets/longTest.json', function(data) {
        $("main").append("<article></article>");
        $("main article").last().load('assets/shortArticle.html', function () {
            $.each(data, function (key, val) {
                if (first) {
                        $(".shortArticle").children("p").text(val.content.slice(0,300)+"...");
                        $(".shortArticle").children("img").attr("src", val.imageURL);
                        $(".shortArticle").children("img").attr("alt", val.altText);
                    first = false;
                } else {
                    $("article").children().append("<section></section>");
                    $("section").last().load('assets/imgSection.html', function () {
                        $("section section").last().children("h3").text(val.title);
                        $("section section").last().children("img").attr("src", val.imageURL);
                        $("section section").last().children("img").attr("alt", val.altText);
                    });
                }
            })
        });
    });
    $("#footer").load('assets/footerTestHTML.html');
});