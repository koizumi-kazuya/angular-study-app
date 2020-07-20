const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/')
const SampleDb = require('./sample-db')
const app = express()
const path = require('path')

const productRoute = require('./route/products')

// app.get('/products', function (req, res) {
//     res.json({ 'success': true })
// })

mongoose.connect(
    config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {
            const sampleDb = new SampleDb()
            // sampleDb.initDb()
        }
    }
)

app.use('/api/v1/products', productRoute)

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



// mongodb+srv://test:<password>@cluster0.1wybp.mongodb.net/<dbname>?retryWrites=true&w=majority