const express = require('express') // Tải express từ node_modules
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000 // Cổng port run website

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
})) // Gửi từ form

app.use(express.json()) // Gửi từ code javascript

// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// path: __dirname/resources/views/layouts/main.handlebars

// Routes init
route(app)

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


