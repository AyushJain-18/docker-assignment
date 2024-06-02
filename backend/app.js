const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api.js');
const app = express();
// Middleware
app.use(express.json());
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;

const dbUser = process.env.MONGO_INITDB_ROOT_USERNAME;
const dbPass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const dbName = process.env.MONGO_INITDB_DATABASE;
const dbHost = process.env.MONGO_HOST;

const dbUrl = `mongodb://${dbUser}:${dbPass}@${dbHost}:27017/${dbName}?authSource=admin`;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
