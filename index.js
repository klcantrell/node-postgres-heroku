const express = require('express');
const db = require('./db/models');

const app = express();
const PORT = process.env.PORT || 5000;
const { Character } = db;

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/characters', (req, res) => {
  Character.all()
    .then(characters => {
      res.render('characters_index', {characters})
    })
    .catch(err => res.send(err));
});

app.post('/characters', (req, res) => {
  const { firstName, lastName, weapon } = req.body;
  Character.create({firstName, lastName, weapon})
    .then(() => res.redirect('/characters'))
    .catch(err => res.send(err));
});

app.get('/characters/new', (req, res) => {
  res.render('characters_new');
});

app.listen(PORT, () => console.log(`Listening of port ${PORT}`));