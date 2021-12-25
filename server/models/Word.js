const mongoose = require('mongoose');

const Word = new mongoose.Schema(
  {
    name: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

exports.WordSchema = Word;
exports.Word = mongoose.model('Word', Word);
