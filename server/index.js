const express = require('express');

const router = require('./router');

const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/v1', router);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
