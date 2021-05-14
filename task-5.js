const fs = require('fs');

// Запишем JSON-файл
const student = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: '22',
    platform: 'Node',
}

fs.writeFile('task-5-file-1.json', JSON.stringify(student), (err) => {
    if (err) {
        console.log('Error');
    }
});

// Читаем JSON-файл
const data = require('./task-5-file-1.json');
console.log(data);

// Читаем CSV-файл
const csv = require('csv-parser');
const results = [];
fs.createReadStream('task-5-file-2.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });

// Пишем CSV-файл
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Подготовим данные для записи
const data = [
    {
        name: 'Ivan',
        surname: 'Ivanov',
        age: '22',
        platform: 'Node',
    },
    {
        name: 'Petr',
        surname: 'Petrov',
        age: '25',
        platform: 'Node',
    },
    {
        name: 'Fedor',
        surname: 'Fedorov',
        age: '30',
        platform: 'Node',
    },
];

const csvWriter = createCsvWriter({
    path: 'task-5-file-3.csv',
    header: [
        {id: 'name', title: 'Name'},
        {id: 'surname', title: 'Surname'},
        {id: 'age', title: 'Age'},
        {id: 'platform', title: 'Platform'}
    ]
});

// Передаем подготовленные в const data данные в метод записи CSV-файла
csvWriter.writeRecords(data)
    .then(() => {
        console.log('...Done');
    });
