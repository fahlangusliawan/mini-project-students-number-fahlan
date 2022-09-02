const express = require('express');
const router = express.Router();
router.use('*', (req, res) => {
    res.status(404).json({
        code: res.statusCode,
        message: `Oops, page not found!`
    });
});
module.exports = router;
