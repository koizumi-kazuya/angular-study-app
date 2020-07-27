const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require("../model/user")
const config = require('../config/')


router.post('/login', function (req, res) {
    const { email, password } = req.body

    if (!email) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'fill email' }] })
    }
    if (!password) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'fill password' }] })
    }

    User.findOne({ email }, function (err, foundUser) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'user Error', detail: 'something wrong' }] })
        }

        if (!foundUser) {
            return res.status(422).send({ errors: [{ title: 'user Error', detail: 'wrong e-mail or password ERR 1' }] })
        }

        if (!foundUser.hasSamePassword(password)) {
            return res.status(422).send({ errors: [{ title: 'user Error', detail: 'wrong e-mail or password ERR 2' }] })
        }

        const jwtToken = jwt.sign({
            userid: foundUser.id,
            username: foundUser.username
        }, config.SECRET, { expiresIn: '1h' });

        return res.json(jwtToken)

    })
})

router.post('/resister', function (req, res) {
    const { username, email, password, confirmPassword } = req.body

    if (!username) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'fill username' }] })
    }
    if (!email) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'fill email' }] })
    }
    if (!password) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'fill password' }] })
    }

    if (password !== confirmPassword) {
        return res.status(422).send({ errors: [{ title: 'user Error', detail: 'check password' }] })

    }

    User.findOne({ email }, function (err, foundUsers) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'user Error', detail: 'something wrong' }] })
        }

        if (foundUsers) {
            return res.status(422).send({ errors: [{ title: 'user Error', detail: 'already email has exist' }] })
        }

        const user = new User({ username, email, password })
        user.save(function (err) {
            if (err) {
                return res.status(422).send({ errors: [{ title: 'user Error', detail: 'something wrong' }] })
            }
            return res.json({ "resistered": true })
        })

    })



})

module.exports = router