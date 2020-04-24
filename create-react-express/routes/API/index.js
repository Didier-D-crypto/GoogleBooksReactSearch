const router = require('express').Router();

const bookRoutes = require( './bookroutes.js');

router.use('/books', bookRoutes);

module.exports = router; //this page is tying components to router