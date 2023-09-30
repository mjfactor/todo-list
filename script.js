
const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");


function addToList() {
    const inputValue = inputBox.value;  // get the value of the input box
    if (inputValue === ''){

    }
    else if (inputValue.length > 55){
        alert("Please enter a value less than 55 characters")
    }
    else {
        let li = document.createElement("li");  // <li></li>
        li.innerHTML = inputValue; // <li>inputValue</li>
        listContainer.appendChild(li); // <ul><li>inputValue</li></ul>
        let del = document.createElement("span"); // <span></span>
        del.className = "close"; // <span class="close"></span>
        del.innerHTML = "x"; // <span>x</span>
        li.appendChild(del); // <li>inputValue<span>x</span></li>
        let edit = document.createElement("span"); // <span></span>
        edit.className = "edit"; // <span class="edit"></span>
        edit.innerHTML = "EDIT"; // <span>edit</span>
        li.appendChild(edit); // <li>inputValue<span>x</span><span>edit</span></li>
    }
    inputBox.value = ''; // clear the input box
    saveList();  // save the list to local storage
}
listContainer.addEventListener("click", function (e) {
    if (e.target.className === "close") {
        e.target.parentNode.remove();
        saveList();
    }else if (e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveList();
    }else if (e.target.className === "edit"){
        let edit = prompt("Edit task", e.target.parentNode.firstChild.textContent);
        if (edit.length > 55){
            alert("Please enter a value less than 55 characters")
        }else{
            e.target.parentNode.firstChild.textContent = edit;
        }
        saveList();
    }
});




const text = "Enter task here";
function typeWriter(div, text, i = 0) {

    function type() {
        if (i < text.length) {
            inputBox.placeholder += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust the typing speed by changing the timeout value
        }else{
            i = 0;
            inputBox.placeholder = '';
            setTimeout(type, 50);
        }
    }

    type();
}
typeWriter(inputBox.placeholder, text);

function saveList() {
    localStorage.setItem("list", listContainer.innerHTML);
}
function loadList() {
    listContainer.innerHTML = localStorage.getItem("list");
}
loadList();


