const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const HistoricModel = require('./models/historicModel');

const app = express();
const PORT = 3001;
const status500 = 500;
const status200 = 200;

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.info('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/data', async (req, res) => {
  try {
    const newSearch = new HistoricModel({
      category: req.body.category,
      site: req.body.site,
    });
    await newSearch.save();
    res.status(status200).json({ mensagem: 'dados adicionados' });
  } catch (err) {
    res.status(status500).json({ mensagem: 'erro ao adicionar dados' });
  }
});

app.listen(PORT, () => {
  console.info(`Servidor rodando na porta ${PORT}`);
});
