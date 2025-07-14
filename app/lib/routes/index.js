// ########################################################
// External dependancies
// ########################################################
const express = require('express');
const router = express.Router();

router.use('/components', require('./components'));
router.use('/', require('./misc'));

module.exports = router;
