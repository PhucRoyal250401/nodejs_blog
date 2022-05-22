const express = require('express') // Tải express từ node_modules
const app = express()
const port = 3000 // Cổng port run website

app.get('/', (req, res) => { // '/' : link
    res.send('Hello World!')
})

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


