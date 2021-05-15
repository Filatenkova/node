const mysql = require('mysql');

// Конфигурация подключения
const conn = mysql.createConnection({
    host: "a209105.mysql.mchost.ru",
    port: "3306",
    user: "a209105_node",
    database: "a209105_node",
    password: "testtesttest"
});

// Создание подключения
conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// Тестовый запрос
let query="SELECT * FROM a209105_node";

conn.query(query, (err, result, field) =>{
    console.log(err);
    console.log(result);
    // console.log(field);
});

// Завершаем подключение
conn.end( err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log('Database ----- Close');
    }
});
