let enterInput = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("myList");
let item = document.getElementsByTagName("li");

const inputLength = () => {
    return input.value.trim().length;
}

const listLength = () => {
    return item.length;
}

// Function create Element
const createElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.className = "font-semibold w -full px-2 py-2 bg-blue-600 text-white text-sm rounded-lg border-3 border-rose-400  hover:bg-blue-700";
    ul.appendChild(li);
    input.value = "";

    // To do list style success
    const elementSuccess = () => {
        li.classList.toggle("done");
    }
    li.addEventListener("click", elementSuccess);

    // To do list Delete
    const elementDelete = () => {
        li.parentNode.removeChild(li);
    }

    // Crete delete item list
    let dBtn = document.createElement("button");
    dBtn.className = "font-bold text-rose-500 text-lg ml-3 text-end";
    dBtn.innerHTML = '<i class="fa-solid fa-paw"></i>';

    dBtn.addEventListener("click", elementDelete);

    li.appendChild(dBtn);
}
// Function After click element
const itemAfterClick = () => {
    if (inputLength() > 0) {
        createElement();
    }
}
const itemAfterClickKeypress = (event) => {
    if (inputLength() > 0 && event.which === 13) {
        createElement();
    }
}
enterInput.addEventListener("click", itemAfterClick);
input.addEventListener("keypress", itemAfterClickKeypress);
