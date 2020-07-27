const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/')
const SampleDb = require('./sample-db')
const app = express()
const path = require('path')

const productRoute = require('./route/products')
const userRoute = require('./route/users')

mongoose.connect(
    config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {
            const sampleDb = new SampleDb()
            // sampleDb.initDb()
        }
    }
)

app.use(bodyParser.json())
app.use('/api/v1/products', productRoute)
app.use('/api/v1/users', userRoute)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'angular-study-app')
    app.use(express.static(appPath))
    app.get("*", function (req, res) {
        res.sendFile(path.resolve(appPath, "index.html"))
    })
}
const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
    console.log('I am running!')
})
