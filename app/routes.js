// ########################################################
// External dependancies
// ########################################################
const express = require('express');
const router = express.Router();

// ########################################################
// 111 online prototype kit shared routes
// ########################################################
router.use('/components', require('./lib/routes/components'));

// ########################################################
// Your routes beneath here
// ########################################################

router.use('/version-1', require('./routes/version-1'));
router.use('/', require('./lib/routes/misc'));

// ########################################################
// End and export routes
// ########################################################
module.exports = router;
