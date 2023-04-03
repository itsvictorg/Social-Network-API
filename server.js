const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(routes)
;

app.use(express.static('public'));

app.use(require('./routes'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/localhost/social-network-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.set('debug', true);

console.log(`server running at http://localhost:${PORT}`);