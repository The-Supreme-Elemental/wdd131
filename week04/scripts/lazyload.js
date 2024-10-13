const current_year = new Date();
document.getElementById("current_year").innerHTML = current_year.getFullYear();

let lastModifiedDate = new Date(document.lastModified);

document.getElementById("lastmodified").innerHTML = "Last Modified:  " + lastModifiedDate;


let avStringLength = names.reduce((total, name) => total + name.length, 0) / name.length