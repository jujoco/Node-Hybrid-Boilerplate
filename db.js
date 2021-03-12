require('dotenv').config();
const mongodb = require('mongodb').MongoClient;

mongodb.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) {
      throw new Error(err);
    } else {
      db.collection('user').find();
    }
  },
);
