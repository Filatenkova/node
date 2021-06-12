require('dotenv').config();
import express from 'express'

const app = express()
const port = process.env.PORT ?? 3000
const sequelize = require('./db.js');
const models = require('./models/models.js');
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Working!'
    })
})

// БД работает всегда асинхронно
const start = async () => {
    try {
        // C помощью authenticate() подключаемся к БД. Вызываем await, так как функция асинхронная
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Server has been started on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
