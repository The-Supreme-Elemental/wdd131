function greetUser() {
    console.log("Hi there!");
}

greetUser();

function introduce(person) {
    console.log("Nice to meet you, " + person + "!");
}

introduce("Christopher");

function describePerson(name, age) {
    console.log(name + " is " + age + " years old!"); // added space before "years old"
}

describePerson("Alex", 24);


function multiply(x, y) {
    return x * y;
}

let product = multiply(5, 3);
console.log(product);


const divide = (a, b) => a / b;

let quotient = divide(6, 3);
console.log(quotient); // Outputs: 2

function power(base, exponent = 2) {
    console.log(base ** exponent); // ** is the exponentiation operator
}

power(5);      // Outputs: 25 (5^2)
power(5, 5);   // Outputs: 3125 (5^5)

function checkWeather(temperature) {
    
    if (temperature < 32) {
        console.log("It's freezing!");
    } else if (temperature > 75) {
        console.log("It's warm!");
    } else {
        console.log("It's a nice day");
    }
    
}

checkWeather(50)