const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsRouter);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
