const express = require('express');

const vCardsControllers = require('../controllers/vCards-controllers');
const router = express.Router();

router.get('/:uid', vCardsControllers.generateVCard);

module.exports = router;