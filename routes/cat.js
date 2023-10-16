const express = require('express');
const router = express.Router();

const catsController = require('../controllers/catsController');

router.get('/', catsController.getCatList);
router.get('/:cat_id', catsController.getCatById);


module.exports = router;