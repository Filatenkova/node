import colors from 'colors'

export function requestTime(req, res, next) {
    req.requestTime = Date.now()

    // следующий шаг. Обязательно, иначе приложение зависнет
    next()
}

export function logger(req, res, next) {
    console.log(colors.bgYellow.blue(`Req.time: ${req.requestTime}`))

    // следующий шаг. Обязательно, иначе приложение зависнет
    next()
}
