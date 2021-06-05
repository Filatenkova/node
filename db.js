const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

// Вариант подключения к БД
// const Pool = require('pg');
//
// const pool = new Pool({
//     user: "filatenkova",
//     password: "",
//     host: "localhost",
//     port: 5432
// })
//
// module.exports = pool
