const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller');

// url/posts
router.get('/', postsController.home);

//url/posts/jvjplus
router.get('/jvjplus', postsController.jvjplus);

module.exports = router;
