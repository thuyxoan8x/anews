const newsApi = "http://localhost:4005/news";

function getParameterByName(name, url = location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var catID = getParameterByName('cid');
console.log(catID);

async function renderNewsByCat() {

    var newsById = await axios.get(newsApi + '/' + catID);
    newsById = newsById.data;

    //TUONG DUOWNG
    // var newsById = await axios({
    //     method: "GET",
    //     url: newsApi + '/' + catID   // url= news/:id
    // });
    // newsById = newsById.data;

    console.log(newsById);
    var leftElement = $('.content-right');
    leftElement.children('h3')
    var ulElement = $('#list-newsByCat');
    var htmls = newsById.map(function (n) {
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
renderNewsByCat();

//const categoryApi = `http://localhost:4005/cat/${catID}`; 

const categoryApi = `http://localhost:4005/cat`;

async function renderTitleById() {

    var categories = await axios.get(categoryApi + '/' + catID);
    categories = categories.data;

    console.log('Categories: ' + categories);
    var h3Element = $('#newsInRight');
    var h3Value = `Tin tức ::${categories[0].name}`;
    h3Element.html(h3Value);

}

renderTitleById();


//const catListAPI = "http://localhost:4005/cat";

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