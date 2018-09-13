const express = require('express');

const router = express.Router();
const page_0 = require('./page0');
const page_1 = require('./page1');
const page_2 = require('./page2');
const page_3 = require('./page3');

router.use('/Page0', page_0);
router.use('/Page1', page_1);
router.use('/Page2', page_2);
router.use('/page3', page_3);

module.exports = router;