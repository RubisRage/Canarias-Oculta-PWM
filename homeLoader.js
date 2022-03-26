$(document).ready(function(){
    const carouselArticles = 2;
    let i = 1;
    $("#header").load('assets/navbar.html');
    $("#carousel").load('assets/carousel.html', function () {
        $.getJSON('assets/longTest.json', function(data) {
            $.each(data, function (key, val) {
                if (i > carouselArticles) {return;}
                $(".carousel-inner").append("<article></article>");
                $("article").last().load('assets/carouselItem.html', function () {
                    $(".carousel-item").last().children("h2").text(val.title);
                    $(".carousel-item").last().children("p").text(val.content.slice(0, 300) + "...");
                    $(".carousel-item").last().children("img").attr("src", val.imageURL);
                    $(".carousel-item").last().children("img").attr("alt", val.altText);
                });
                i++;
            });
        });
    });
    $.getJSON('assets/longTest.json', function(data) {
        i=1
        $.each(data, function (key, val) {
            $("main").append("<article></article>");
            if (i==carouselArticles+1) {
                $("main article").last().load('assets/articleResume.html', function () {
                    $(".articleResume").last().children("h1").text(val.title);
                    $(".articleResume").last().children("p").text(val.content.slice(0,300)+"...");
                    $(".articleResume").last().children("img").attr("src", val.imageURL);
                    $(".articleResume").last().children("img").attr("alt", val.altText);
                });
            } else if (i>carouselArticles+1) {
                $("main article").last().load('assets/articleResumeSmall.html', function () {
                    $(".articleResumeSmall").last().children("h1").text(val.title);
                    $(".articleResumeSmall").last().children("p").text(val.content.slice(0,200)+"...");
                    $(".articleResumeSmall").last().children("img").attr("src", val.imageURL);
                    $(".articleResumeSmall").last().children("img").attr("alt", val.altText);
                });
            }
            i++;
        })
    });
    $("#footer").load('assets/footerTestHTML.html');
});