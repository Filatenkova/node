require('dotenv').config();
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const PORT = process.env.PORT ?? 3000
const app = express()
app.use(cors())
app.use(express.json())

// БД работает всегда асинхронно
const start = async () => {
    try {
        // C помощью authenticate() подключаемся к БД. Вызываем await, так как функция асинхронная
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
