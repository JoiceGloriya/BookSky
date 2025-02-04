//selecting the '+' button, the pop-up-box shld ppear [pop-up-box and pop-up-overlay display property shld become block]
let popUpOverlay = document.querySelector(".popupOverlay");
let popUpBox = document.querySelector(".popupBox");
let addButtn = document.getElementById("addBtn");

addButtn.addEventListener("click", function() {
    popUpBox.style.display = "block";
    popUpOverlay.style.display = "block";
})

let cancel_button = document.getElementById("cancelButton");
cancel_button.addEventListener(("click"), function(event) {
    event.preventDefault();
    popUpBox.style.display = "none";
    popUpOverlay.style.display = "none";
})

let addBtnFunctionality = document.getElementById("addButton");
let container = document.querySelector(".container");
let addBook = document.getElementById("addButton");
let bookTitle = document.getElementById("book-title");
let bookAuthor = document.getElementById("book-author");
let bookDesc = document.getElementById("book-desc");

addBtnFunctionality.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookTitle.value}</h2>
            <h5>${bookAuthor.value}</h5>
            <p>${bookDesc.value}</p>
            <button onclick="deleteBook(event)">Delete</button>`;
    container.append(div);
    popUpBox.style.display = "none";
    popUpOverlay.style.display = "none";
})

function deleteBook(event) {
    event.target.parentElement.remove();
}