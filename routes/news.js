const express = require('express');
const router = express.Router();

const newsController = require('../controllers/newsController');

router.get('/', newsController.getNewsList);          //url: news/
router.get('/:cat_id', newsController.getNewsByCat);  //url : news/cat_id
router.get('/:id', newsController.getNewsById);       //url: news/id ==> Chi tiet = News by Id

router.get('/newsItemById',newsController.getNewsItemById);

module.exports = router;