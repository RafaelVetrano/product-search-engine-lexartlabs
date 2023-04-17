const mongoose = require('mongoose');

const historicSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
});

const HistoricModel = mongoose.model('Historic', historicSchema);

module.exports = HistoricModel;
