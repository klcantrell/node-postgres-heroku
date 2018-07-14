const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send("What's up!!");
});

app.listen(PORT, () => console.log(`Listening of port ${PORT}`));