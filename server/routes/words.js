const express = require('express');
const { addWord, getWords } = require('../controllers/word');

const router = express.Router({ mergeParams: true });

router.route('/').get(getWords).post(addWord);

module.exports = router;
