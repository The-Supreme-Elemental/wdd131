// let d = new Date();
// document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
// document.querySelector("#lastModified").textContent = `Last Modification: $(document.lastModified)`;


const current_year = new Date();
document.getElementById("currentYear").innerHTML = current_year.getFullYear();
let lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified:  " + lastModifiedDate;

const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});





const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Toronto Ontario",
        location: "Ontario, Canada",
        dedicated: "1984, August, 27",
        area: 57982,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-235671-wallpaper.jpg"

    },
    {

        templeName: "Toronto Ontario",
        location: "Ontario, Canada",
        dedicated: "1984, August, 27",
        area: 57982,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-235671-wallpaper.jpg"

    }
    // Add more temple objects here...
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector("#gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let place = document.createElement("p");
        let dedication = document.createElement("p");
        let sqrArea = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        place.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated</span> ${temple.dedicated}`;
        sqrArea.innerHTML = `<span class="label">Area:</span> ${temple.area} sqr ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(place);
        card.appendChild(dedication);
        card.appendChild(sqrArea);
        card.appendChild(img);


        document.getElementById("gallery").appendChild(card);

    })


}
const oldFilter = (temples, oldFilterDate) => {
    const filterDate = new Date(oldFilterDate);
    return temples.filter(temple => {
        // const filterDate = new Date(temple.dedicated);
        const [year, month, day] = temple.dedicated.split(", ").map(part => part.trim());
        const formattedDate = `${year}-${new Date(`${month} 1`).getMonth() + 1}-${day}`;
        const templeDate = new Date(formattedDate);
        return templeDate < filterDate;


    })

}
const newFilter = (temples, newFilterDate) => {
    const filterDate = new Date(newFilterDate);
    return temples.filter(temple => {
        // const filterDate = new Date(temple.dedicated);
        const [year, month, day] = temple.dedicated.split(", ").map(part => part.trim());
        const formattedDate = `${year}-${new Date(`${month} 1`).getMonth() + 1}-${day}`;
        const templeDate = new Date(formattedDate);
        return templeDate > filterDate;


    })

}



const templeLink = document.querySelector("#home");
templeLink.addEventListener("click", () => {
    createTempleCard(temples);
})
const oldtempleLink = document.querySelector("#oldtemples");
oldtempleLink.addEventListener("click", () => {
    const filteredTemples = oldFilter(temples, "1900-01-01");
    createTempleCard(filteredTemples);
})
const newtempleLink = document.querySelector("#newtemples");
newtempleLink.addEventListener("click", () => {
    const filteredTemples = newFilter(temples, "2000-01-01");
    createTempleCard(filteredTemples);


})
const lrgareaLink = document.querySelector("#lrgarea");
lrgareaLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));

})
const smlareaLink = document.querySelector("#smlarea");
smlareaLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));


})

const nonutahLink = document.querySelector("#nonutah");
nonutahLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Utah")));

});