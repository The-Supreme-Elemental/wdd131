const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener.toggle("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});