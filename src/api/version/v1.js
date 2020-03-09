'use strict'
const router = require('express').Router();
//api router will mount other routers
const userRoute = require('../routes/user');
//for all our resources
router.use('/users', userRoute);


module.exports = router;