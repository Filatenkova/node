// argv - массив, считывающий переданные значения в команде запуска
const arg = process.argv;
const a = +arg[2]; // символ + приводит к правильному типуу данных
const b = +arg[3]; // символ + приводит к правильному типуу данных
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
// Команда в консоли node task-3 555 8
// Получим результат:
// 555
