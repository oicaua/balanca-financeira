const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/src/css/style.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/style.css'))
})

router.get('/src/script/main.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/script/main.js'))
})

router.get('/src/css/cards.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/cards.css'))
})

router.get('/src/css/footer.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/footer.css'))
})

router.get('/src/css/forms-simple-advanced.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/forms-simple-advanced.css'))
})

router.get('/src/css/head.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/head.css'))
})

router.get('/src/css/infobox.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/infobox.css'))
})

router.get('/src/css/inputs.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/inputs.css'))
})

router.get('/src/css/result.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/result.css'))
})

router.get('/src/css/simple-advanced-buttons.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/css/simple-advanced-buttons.css'))
})

app.use('/', router)

app.listen(process.env.port || 8080)