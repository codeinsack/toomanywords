const asyncHandler = require('../middleware/async');
const { Word } = require('../models/Word');

exports.addWord = asyncHandler(async (req, res, next) => {
  const word = await Word.create(req.body);

  res.status(200).json(word);
});

exports.getWords = asyncHandler(async (req, res, next) => {
  const words = await Word.find();

  res.status(200).json(words);
});
