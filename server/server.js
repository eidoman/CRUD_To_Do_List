const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV]);

app.use(express.json());

app.get('/echo', function (req, res) {
  res.status(200).end('Hello World!')
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});