$(document).ready(function(){
    const carouselArticles = 2;
    let i = 1;
    var carousel1;
    var carousel2;
    $.getJSON('assets/longTest.json', function(data) {
        $.each(data, function (key, val) {
            if (i > carouselArticles) {return;}
            console.log(val);
            if (i==1) {carousel1=val;}
            if (i==2) {carousel2=val;}
            /*$(".carousel-inner").append("<article></article>");
            $("article").last().load('assets/carouselItem.html', function () {
                $(".textOverlay").last().children("h2").text(val.title);
                $(".textOverlay").last().children("p").text(val.content.slice(0, 300) + "...");
                $(".carousel-item").last().children("img").attr("src", val.imageURL);
                $(".carousel-item").last().children("img").attr("alt", val.altText);
            });*/
            i++;
        });
    });
    $("#header").load('assets/navbar.html');
    $("#carousel").load('assets/carousel.html', function () {
        var val;
        val = carousel1;
        console.log(carousel1);
        $(".textOverlay").first().children("h2").text(val.title);
        $(".textOverlay").first().children("p").text(val.content.slice(0, 300) + "...");
        $(".carousel-item").first().children("img").attr("src", val.imageURL);
        $(".carousel-item").first().children("img").attr("alt", val.altText);
        val = carousel2;
        $(".textOverlay").last().children("h2").text(val.title);
        $(".textOverlay").last().children("p").text(val.content.slice(0, 300) + "...");
        $(".carousel-item").last().children("img").attr("src", val.imageURL);
        $(".carousel-item").last().children("img").attr("alt", val.altText);
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