const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.createElement("li");
const deleteButton = document.createElement("button");



button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        li.textContent = input.value;
        button.textContent = "❌";
        li.append(deleteButton);
        list.append(li);
    }
});

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
    input.value = "";
    input.focus();
})
