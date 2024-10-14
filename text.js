//  arrays.js
const steps = ["one", "two", "three"];


function listTemplate(step) {
    return `<li>${step}</li>`; //the html string made from step
}


const stepsHtml = steps.map(listTemplate)  // use map to convert the list from strings to HTML


document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML


// Declare an array with letter grades in it: ['A', 'B', 'A']
const grades = ["A", "B", "A"];

const returnGrade = (grade) => {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gradesHTML = grades.map(returnGrade);

// console.log(gradesPoints);

const totalGPA = grades.reduce((total, point) => total + point, 0);
const averageGPA = totalGPA / grades.length;

console.log(averageGPA);
