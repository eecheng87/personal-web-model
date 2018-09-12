const express = require('express');

const router = express.Router();
const page_0 = require('./page0');
const page_1 = require('./page1');

router.use('/Page0', page_0);
router.use('/Page1', page_1);



module.exports = router;