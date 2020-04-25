const axios = require('axios');

const { config } = require('dotenv');

config();

const { BASE_URL } = process.env;

module.exports = () => axios.create({
  baseURL: BASE_URL,
});
