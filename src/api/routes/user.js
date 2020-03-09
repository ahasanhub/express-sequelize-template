const router = require('express').Router();
//const userController = require('../controllers/user');
//const auth = require('../middleware/auth');

//[api/v1/users]
router.route('/')
    .get((req, res) => {
        res.send({
            message: 'Hello World'
        });
    });

module.exports = router;