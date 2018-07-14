const express = require('express');
const db = require('./db/models');

const app = express();
const PORT = process.env.PORT || 5000;
const { Character } = db;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send("What's up!!");
});

app.get('/characters', (req, res) => {
  Character.all()
    .then(characters => {
      res.send(characters);
    })
})

app.listen(PORT, () => console.log(`Listening of port ${PORT}`));