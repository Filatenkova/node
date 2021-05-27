// Импортируем express

// Подключаем express через модули
// const express = require('express')

// Или подключаем express через импорт (работает немного по-другому, чем подключение через модули).
import express from 'express'
import path from 'path'

// Импортируем функции requestTime и logger из middlewares.js
import {requestTime, logger} from './middlewares.js'

// Инициализируем приложение
const app = express()

// Все, что находится в переменной окружения PORT, или 3000, если там ничего нет.
const port = process.env.PORT ?? 3000

// Присваиваем __dirname отдельно, так как подключили express через импорт
const __dirname = path.resolve()

// Объявим, что папка static статична, и мы можем брать из нее файлы.
// Заменяет обработку url через app.get
app.use(express.static(path.resolve(__dirname, 'static')))

// Регистрируем
app.use(requestTime)
app.use(logger)

// Обработаем запрос по url = '/'. Закомментировала, так как заменила реализацию на app.use
// app.get('/', (req, res) => {
//     //res.send('<h1>Hello World!</h1>')
//     // Подключим страницу
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

// Обработаем запрос по url = '/features'. Закомментировала, так как заменила реализацию на app.use
// app.get('/features', (req, res) => {
//     // Подключим страницу
//     res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

// Обработаем запрос по url = '/download'
app.get('/download', (req, res) => {
    console.log(req.requestTime)
    // Скачаем страницу
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
