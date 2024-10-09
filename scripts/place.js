const current_year = new Date();
document.getElementById("current_year").innerHTML = current_year.getFullYear();

let lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastmodified").innerHTML = "Last Modified:  " + lastModifiedDate;

function calcWindChill(airTemp, windSpeed) {

    if (airTemp <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * airTemp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * airTemp * (windSpeed ** 0.16));
        return windChill.toFixed() + "°";
    } else {
        return "N/A";
    }
}

let windChill = calcWindChill(5, 4);
document.querySelector("#windchill").textContent = windChill;
