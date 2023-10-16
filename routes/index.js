const newsRouter = require('./news'); //routes/news.js
const catsRouter = require('./cat');

//Shift + Alt + Down

function route(app) {
    app.use('/news', newsRouter); //url : domain/news
    app.use('/cat', catsRouter);

}

module.exports = route;