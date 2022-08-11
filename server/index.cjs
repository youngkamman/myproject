const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()



app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.static('fighting-game-code'))
app.get('/',(req, res) => {
     res.sendFile(path.join(__dirname,'../public/index.html')) 
})
app.get('/home',(req, res) => {
     res.sendFile(path.join(__dirname,'../fighting-game-code/home.html')) 
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`jammin on ${port}`))