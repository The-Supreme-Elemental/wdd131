const numbers = [3, 7, 2, 8, 5];

const maxNumber = numbers.reduce((acc, num) => {
    if (num > acc) {
        acc = num;
    }
    return acc;
}, 0);

console.log(maxNumber)