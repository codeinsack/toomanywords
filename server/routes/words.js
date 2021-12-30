const express = require('express');
const { addWord, getWords } = require('../controllers/word');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/').get(protect, getWords).post(protect, addWord);

module.exports = router;
