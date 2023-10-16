const newsApi = "http://localhost:4005/news";

async function renderNews() {
    var news = await axios.get(newsApi);
    news = news.data;

    var ulElement = $('#list-news');
    var htmls = news.map(function (n) {
        return `<li>
                <h2> <a href="chitiet.html?id=${n.id}" title=""> ${n.description} </a> </h2>
                <div class="item">
                <p>${n.detail}</p>
                <div class="clr"></div> 
                </div>
                </li>`;
    });
    ulElement.html(htmls.join(''));
}
renderNews();

const categoryApi = "http://localhost:4005/cat";

async function renderCategories() {
    var categories = await axios.get(categoryApi);
    categories = categories.data;

    var ulElement = $('#list-cat');
    var htmls = categories.map(function (c) {
        return `<li>
                <a href="danhmuc.html?cid=${c.id}">${c.name}</a>
                </li>`;
    });
    ulElement.html(htmls.join(''));
}
renderCategories();




