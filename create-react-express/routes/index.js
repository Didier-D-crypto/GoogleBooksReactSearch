const router = require('express').Router();

// const path = require('path'); 

const apiRoutes = require('./API'); 

router.use('/API', apiRoutes); 

module.exports = router; //check if we need path

