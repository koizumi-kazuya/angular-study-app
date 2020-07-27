const jwt = require('jsonwebtoken');
const config = require('../config/')
const User = require("../model/user")

function notAuth(res) {
    return res.status(401).send({ errors: [{ title: 'Not Authorize', detail: 'Need to Login' }] })
}


exports.authMiddleware = function (req, res, next) {
    const token = req.headers.authorization

    if (!token) {
        return notAuth(res)
    }


    jwt.verify(token.split(' ')[1], config.SECRET, function (err, decodedToken) {

        if (err) {
            return res.status(401).send({ errors: [{ title: 'Not Authorize', detail: 'Invalided Token' }] })
        }

        User.findById(decodedToken.userid, function (err, founfUser) {
            if (err) {
                return res.status(401).send({ errors: [{ title: 'Not Authorize', detail: 'Invalided Token' }] })
            }
            if (!founfUser) {
                return res.status(401).send({ errors: [{ title: 'Not Authorize', detail: 'Invalided Token' }] })
            }
        })

    });

    next()
}