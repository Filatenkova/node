// Импортируем express

// Подключаем express через модули
// const express = require('express')

// Или подключаем express через импорт (работает немного по-другому, чем подключение через модули).
import express from 'express'
import path from 'path'

// Инициализируем приложение
const app = express()

// Все, что находится в переменной окружения PORT, или 3000, если там ничего нет.
const port = process.env.PORT ?? 3000

// Присваиваем __dirname отдельно, так как подключили express через импорт
const __dirname = path.resolve()

// Обработаем запрос по url = '/'
app.get('/', (req, res) => {
    //res.send('<h1>Hello World!</h1>')
    // Подключим страницу
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

// Обработаем запрос по url = '/features'
app.get('/features', (req, res) => {
    // Подключим страницу
    res.sendFile(path.resolve(__dirname, 'static', 'features.html'))
})

// Обработаем запрос по url = '/download'
app.get('/download', (req, res) => {
    // Скачаем страницу
    res.download(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
