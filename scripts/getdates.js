// const today = new Date();
// const currentYear = today.getFullYear();

const current_year = new Date();
document.getElementById("current_year").innerHTML = current_year.getFullYear();


const today = new Date();
const currentDayOfMonth = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const currentHour = today.getHours();
const currentMinute = today.getMinutes();
const currentSecond = today.getSeconds();

document.getElementById("lastModified").innerHTML = "Last Modified:  " + (currentMonth + 1) + "/" + currentDayOfMonth + "/" + currentYear + " " + currentHour + ":" + currentMinute + ":" + currentSecond;



// medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
//     "en-US",
//     {
//         dateStyle: "medium"
//     }
// ).format(today)}</span>`;

// current_year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

// document.getElementById("currentyear").textContent = currentYear;