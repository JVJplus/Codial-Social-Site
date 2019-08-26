const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("Router Loaded");

//For direct requests
router.get('/',homeController.home);

// For /users requests
router.use('/users', require('./users'));

// For /posts requests
router.use('/posts', require('./posts'));

//For any further routes, access from here
//router.use('/routerName'', require('./routerFile));

module.exports = router;













//should be at end of all calls!
//For Invalid calls
router.use('/',function(req,res){
    return res.end("<h1 style='text-align:center;color:red'>404 Error</h1>");       
});