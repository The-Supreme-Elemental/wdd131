const current_year = new Date();
document.getElementById("currentYear").innerHTML = current_year.getFullYear();
let lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified:  " + lastModifiedDate;



const mainnav = document.querySelector("nav")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});