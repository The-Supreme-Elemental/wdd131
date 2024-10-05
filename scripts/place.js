const current_year = new Date();
document.getElementById("current_year").innerHTML = current_year.getFullYear();

let lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastModified").innerHTML = "Last Modified:  " + lastModifiedDate;