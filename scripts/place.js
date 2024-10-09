const current_year = new Date();
document.getElementById("current_year").innerHTML = current_year.getFullYear();

let lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = "Last Modified:  " + lastModifiedDate;

function calcWindChill(airTemp, windSpeed) {
    console.log(35.74 + (0.6215 * airTemp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * airTemp * (windSpeed ** 0.16)))
}

