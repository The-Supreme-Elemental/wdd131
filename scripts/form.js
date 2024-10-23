const current_year = new Date();
document.getElementById("currentYear").innerHTML = current_year.getFullYear();
let lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last Modified:  " + lastModifiedDate;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];



function populateProductNames() {
    const selectElement = document.getElementById('prodname');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;

        selectElement.appendChild(option);

    });

}

window.addEventListener('DOMContentLoaded', populateProductNames);