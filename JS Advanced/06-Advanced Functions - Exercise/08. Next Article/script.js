function getArticleGenerator(articles) {

    const divElement = document.getElementById('content');

    function addingArticle() {
        if (articles.length > 0) {
            const currentArticle = articles.shift();
            const articleElement = document.createElement('article');
            articleElement.textContent = currentArticle;
            divElement.appendChild(articleElement)
        }
    }

    return addingArticle;
}
