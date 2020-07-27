const express = require('express')
const router = express.Router()
const Product = require("../model/product")
const UserCtl = require("../controllers/user")


router.get('', function (req, res) {
    Product.find({}, function (err, foundProducts) {
        return res.json(foundProducts)
    })
})

router.get('/:productId', UserCtl.authMiddleware, function (req, res) {
    const productId = req.params.productId
    Product.findById(productId, function (err, foundProduct) {
        if (err) {
            return res.status(422).send({ errors: [{ title: 'product Error', detail: 'product not found' }] })
        }

        return res.json(foundProduct)
    })
})

module.exports = router