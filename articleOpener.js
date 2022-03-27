function openArticle(article) {
    article = $(article);
    if(article.find("h3").text() != "") window.localStorage.setItem("title", article.find("h3").text());
    if(article.find("h2").text() != "") window.localStorage.setItem("title", article.find("h2").text());
    //if(article.find(".card-body h2").text() != "") window.localStorage.setItem("title", article.children("h2").text());
    if(article.find("h1").text() != "") window.localStorage.setItem("title", article.find("h1").text());
    window.location.href = "dynamicArticle.html";
}