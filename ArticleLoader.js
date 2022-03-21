$(document).ready(function(){
    $("title").text("llafkj");
    $("#header").load('assets/navbar.html');
    $("#article").load('assets/articlePage.html');
    $(".longArticle > h1").text('Montañón');
    $("#imgLongArticle").attr("src","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ngenespanol.com%2Fdato-" +
        "dia%2Fcual-es-considerada-la-montana-perfecta%2F&psig=AOvVaw3Pw3F-e318oAmX6W9x0GWh&ust=1647943799106000&source=" +
        "images&cd=vfe&ved=0CAgQjRxqFwoTCLDltZT71vYCFQAAAAAdAAAAABAE");
    $("#footer").load('assets/footerTestHTML.html');
});