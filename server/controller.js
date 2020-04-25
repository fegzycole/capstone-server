const axios = require('../server/axios');

const { config } = require('dotenv');

config();

const { API_KEY } = process.env;

const getBeers = async (req, res) => {
  try {
    let { data: { data } } = await axios().get(`/beers?key=${API_KEY}`);

    return res.status(200).json({
      status: 'success',
      data
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      error: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    let { data } = await axios().get(`/categories?key=${API_KEY}`);

    return res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      error: error.message,
    });
  }
};

module.exports = { getBeers, getCategories }
