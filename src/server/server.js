const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(4000, (err) => {
  if (err) console.error(err);
  else console.log('Server running at http://localhost:4000');
});
