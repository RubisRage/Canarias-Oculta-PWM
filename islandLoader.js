$(document).ready(function(){
    var first = true;
    $("#header").load('assets/navbar.html');
    $("main #verticalNavBar").load('assets/verticalNavbar.html');
    $.getJSON('assets/longTest.json', function(data) {
        $("#shortArticle").load('assets/shortArticle.html', function () {
            $.each(data, function (key, val) {
                if (first) {
                    $(".shortArticle").children("p").text(val.content.slice(0,300)+"...");
                    $(".imgLongArticle").children("img").attr("src", val.imageURL);
                    $(".imgLongArticle").children("img").attr("alt", val.altText);
                    first = false;
                } else {
                    $("#sections").append("<div class='col'></div>");
                    $(".col").last().load('assets/imgSection.html', function () {
                        $("section").last().children("h3").text(val.title);
                        $("section").last().children("img").attr("src", val.imageURL);
                        $("section").last().children("img").attr("alt", val.altText);
                    });
                }
            })
        });
    });
    $("#footer").load('assets/footerTestHTML.html');
});