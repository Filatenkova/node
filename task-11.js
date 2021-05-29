import express from 'express'
import path from 'path'
import serverRoutes from './routes/servers.js'

const app = express()

const port = process.env.PORT ?? 3000

const __dirname = path.resolve()

app.use(serverRoutes)
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Установим, какое представление мы будем использовать
app.set('view engine', 'ejs');

// Посмотрим значение константы.
console.log(app.get('view engine'))

// Поменяем папку для хранения представлений
app.set('views', path.resolve(__dirname, 'ejs'));

// Рендерим необходимую страницу
app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (req, res) => {
    res.render('features', {title: 'Features Page', active: 'features'})
})

app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
