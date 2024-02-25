let enterInput = document.getElementById("enter");
let input = document.getElementById("username");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

const inputLength = () => {
    return input.value.length;
}
const listLength = () => {
    return item.length;
}

// Function create Element
const creteElement = () => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // To do list style success
    const ElementSuccess = () => {
        li.classList.toggle("done");
    }
    li.addEventListener("click", ElementSuccess);

    // To do list Delete
    const ElementDelete = () => {
        li.classList.add("delete");
    }

    // Crete delete item list
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("i"));
    li.appendChild(dBtn);

    dBtn.addEventListener("click", ElementDelete);
}
// Function After click element
const ItemAfteClick = () => {
    if (inputLength() > 0) {
        creteElement();
    }
}
const ItemAfterClickKeypress = (event) => {
    if (inputLength() > 0 && event.which === 13) {
        creteElement();
    }
}
enterInput.addEventListener("click", ItemAfteClick);
input.addEventListener("keypress", ItemAfterClickKeypress);

                // kae error mai