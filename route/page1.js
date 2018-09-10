const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/Page_1', (req, res) => {
    res.sendFile('Page_1.html', { root: path.join(__dirname, '../html') });
});

module.exports = router;