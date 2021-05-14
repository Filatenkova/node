// Подключаем модуль для работы с файлами
const fs = require('fs');
// Подключаем модуль для работы с путями
const path = require('path');

// Учимся читать файлы. way 1
fs.readFile('task-4-file-1.txt', 'utf-8', (err, data) => {
    console.log(data);
});
// Проверим асинхронность (следующий код будет выведен ранее предыдущего)
console.log('===============');

// Учимся читать файлы. way 2
let text = fs.readFileSync('task-4-file-2.txt', 'utf-8');
console.log(text);
// Проверим синхронность (следующий код будет выведен после предыдущего)
console.log('***************');

// Учимся читать папки
fs.readdir('task-4-section', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file);
        console.log('extention: ' + path.extname(file));
        console.log(fs.statSync('task-4-section/' + file));
    });
});

// Учимся записывать файлы
fs.writeFile('task-4-file-3.txt', 'Бразды пушистые взрывая,\nЛетит кибитка удалая;', (err) => {
    if (err) {
        console.log(err);
    }
});
