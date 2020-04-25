const express = require('express');

const { getBeers, getCategories } = require('./controller');

const router = express.Router();

router.get('/categories', getCategories);

router.get('/beers', getBeers);

module.exports = router;
