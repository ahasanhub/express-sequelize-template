const jwt = require('jsonwebtoken');
const {
    User
} = require('../models');
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findOne({
            where: {
                id: data.id,
            },
        });
        if (!user) {
            return res.status(401).send({
                status: 401,
                code: 'AUT_02',
                message: 'Access Unauthorized',
            });
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports = auth;