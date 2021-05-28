import express from 'express'
import path from 'path'

const app = express()

const port = process.env.PORT ?? 3000

const __dirname = path.resolve()

// Посмотрим значение константы.
console.log(app.get('view engine'))

// Установим, какое представление мы будем использовать
app.set('view engine', 'ejs');

// Поменяем папку для хранения представлений
app.set('views', path.resolve(__dirname, 'ejs'));

// Рендерим необходимую страницу
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
