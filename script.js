const container = document.querySelector("#grid-container");


// const gridElement = container.createElement("div");


function buildSquares(squareNumber) {
    if (squareNumber > 100) {
        alert("Try something lower than 100.")
        numberOfSquares = prompt("How many squares do you want?");
        buildSquares(numberOfSquares);
        return
    }
    squareNumber = squareNumber ** 2
    for (let x = 0; x < squareNumber; x++) {
        const gridElement = document.createElement('div');
        container.appendChild(gridElement);
        gridElement.classList.add("grid-item");
    }
    mouseoverMagic();
}


const btn = document.querySelector(".cta")
btn.addEventListener("click", () => {
    removeLastChild(container);
    numberOfSquares = prompt("How many squares do you want?");
    buildSquares(numberOfSquares);
})


// const items = document.querySelector(".grid-item");

// On mouseover, add a new class to the square
function mouseoverMagic() {
    const items = Array.from(document.querySelectorAll('.grid-item'));
    items.forEach(item => item.addEventListener('mouseover', () => {
        if (window.event.ctrlKey) {
            item.classList.remove("colorItRed");
            item.classList.remove("colorItYellow");
            item.classList.add("colorItBlue");
        }
        else if (window.event.shiftKey) {
            item.classList.add("colorItRed")
            item.classList.remove("colorItYellow");
            item.classList.remove("colorItBlue");
        }
        else {
            item.classList.add("colorItYellow")
            item.classList.remove("colorItRed");
            item.classList.remove("colorItBlue");
        }

    }));
}

//  remove last child
function removeLastChild(myNode) {
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    
}

