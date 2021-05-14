// Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.
function f2(a, b) {
    return Math.max(a, b);
}
let result1;
result1 = f2(10, 20);
console.log(result1);

// Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.
function f3(max) {
    return Math.floor(Math.random() * max);
}
let result2;
result2 = f3(10);
console.log(result2);
