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
            if (i>=carouselArticles+1) {
                if (i==carouselArticles+1) {
                    $("#important").load('assets/articleCard.html', function () {
                        $(".card div").last().children("h2").text(val.title);
                        $(".card div").last().children("p").text(val.content.slice(0,300)+"...");
                        $(".card").last().children("img").attr("src", val.imageURL);
                        $(".card").last().children("img").attr("alt", val.altText);
                    });
                }
                if (i==carouselArticles+2) {
                    $("#side1").load('assets/articleCard.html', function () {
                        $(".card div").last().children("h2").text(val.title);
                        $(".card div").last().children("p").text(val.content.slice(0,300)+"...");
                        $(".card").last().children("img").attr("src", val.imageURL);
                        $(".card").last().children("img").attr("alt", val.altText);
                    });
                }
                if (i==carouselArticles+3) {
                    $("#side2").load('assets/articleCard.html', function () {
                        $(".card div").last().children("h2").text(val.title);
                        $(".card div").last().children("p").text(val.content.slice(0,300)+"...");
                        $(".card").last().children("img").attr("src", val.imageURL);
                        $(".card").last().children("img").attr("alt", val.altText);
                    });
                }
                if (i>=carouselArticles+3) {
                    $("#additional").append("<div class='col'></div>");
                    $("#additional").children(".col").last().load('assets/articleCard.html', function () {
                        $(".card div").last().children("h2").text(val.title);
                        $(".card div").last().children("p").text(val.content.slice(0, 300) + "...");
                        $(".card").last().children("img").attr("src", val.imageURL);
                        $(".card").last().children("img").attr("alt", val.altText);
                    });
                }
            }
            i++;
        })
    });
    $("#footer").load('assets/footerTestHTML.html');
});