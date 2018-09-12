const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('Page_1.html', { root: path.join(__dirname, '../html') });
});

module.exports = router;