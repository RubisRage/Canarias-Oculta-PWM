$(document).ready(function(){
    var first = true;
    $("#header").load('assets/navbar.html');
    $("#carousel").load('assets/carousel.html');
    $.getJSON('assets/longTest.json', function(data) {
        $.each(data, function (key, val) {
            $("main").append("<article></article>");
            if (first) {
                $("main article").last().load('assets/articleResume.html', function () {
                    $(".articleResume").last().children("h1").text(val.title);
                    $(".articleResume").last().children("p").text(val.content.slice(0,300)+"...");
                    $(".articleResume").last().children("img").attr("src", val.imageURL);
                    $(".articleResume").last().children("img").attr("alt", val.altText);
                });
                first = false;
            } else {
                $("main article").last().load('assets/articleResumeSmall.html', function () {
                    $(".articleResumeSmall").last().children("h1").text(val.title);
                    $(".articleResumeSmall").last().children("p").text(val.content.slice(0,200)+"...");
                    $(".articleResumeSmall").last().children("img").attr("src", val.imageURL);
                    $(".articleResumeSmall").last().children("img").attr("alt", val.altText);
                });
            }
        })
    });
    $("#footer").load('assets/footerTestHTML.html');
});