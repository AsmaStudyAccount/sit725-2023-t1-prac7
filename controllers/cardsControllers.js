var cardModel = require("../models/card");

exports.getCardData = (req, res) => {
  var data = cardModel.getCardData();
  res.json(data);
};
