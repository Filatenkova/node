// variant 1
module.exports = [5, 6, 7, 8];

// variant 2
module.exports = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: '22',
    platform: 'Node',
};

// variant 3
module.exports = function (a, b) {
    a++;
    return a * b;
};

// variant 4
module.exports = {
    a: 3,
    b: 2,
    f: function(a, b) {
        return a - b;
    }
};
