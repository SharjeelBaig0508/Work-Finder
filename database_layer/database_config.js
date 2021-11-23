const dotenv = require('dotenv');
dotenv.config()

// MongoDB
MONGO_USER = process.env.MONGO_USER;
MONGO_PASS = process.env.MONGO_PASS;
MONGO_DB = process.env.MONGO_DB;

module.exports = {
  mongodb_url: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@dream-finder-cluster.r34jp.mongodb.net/${MONGO_DB}`,
};
