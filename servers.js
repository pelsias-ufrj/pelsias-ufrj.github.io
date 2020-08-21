const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('./public/.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/join-us.html', (req, res) => {
  console.log(req.body);
  res.send('cadastrado');
});

app.get('/teste', (req, res) => res.send('ok'));
app.listen(8080, () => console.log('Executando...'));

module.exports = {
  app,
};
