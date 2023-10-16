const newsByIdApi = `http://localhost:4005/news`;

function getParameterByName(name, url = location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var id = getParameterByName('id');
console.log('ID of selected new: ' + id);

// async function renderNewsById() {

//     var newsItem = await axios.get(newsByIdApi + '/' + id);
//     newsItem = newsItem.data;

//     console.log('newsItem: ' + newsItem);

//     var rightContent = $('#ContentRight');
//     rightContent.html(`<h3>${newsItem.description}</h3>
//     <div class="main-content">
//         ${newsItem.detail}
//     </div> `);    


// }

// renderNewsById();


async function renderNewsItemById() {


    var newsItemById = await axios.get(`http://localhost:4005/news/newsItemById?id=${id}`);
    
    newsItemById = newsItemById.data;

    console.log('newsItem: ' + newsItemById);

    var rightContent = $('#ContentRight');
    rightContent.html(`<h3>${newsItem.description}</h3>
    <div class="main-content">
        ${newsItem.detail}
    </div> `);


}

renderNewsItemById();

const categoryApi = `http://localhost:4005/cat`;

async function renderCategories() {
    var categories = await axios.get(categoryApi);
    categories = categories.data;

    var ulDanhmuc = $('#danhmucleft');
    var htmls = categories.map(function (c) {
        return `<li><a href="danhmuc.html?id=${c.id}">${c.name}</a></li>`;
    });
    ulDanhmuc.html(htmls.join(''));
}
renderCategories();