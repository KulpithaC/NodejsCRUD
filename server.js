const express = require('express')

const productRouter = require('./Routes/product')

const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./Config/db')

const app = express();
const { readdirSync } = require('fs')
const port = 5000

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10mb'}))
// app.use('/api', productRouter)
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))

app.listen(5000, () => console.log(`Server is running on port ${port}`))