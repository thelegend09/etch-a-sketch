const container = document.querySelector("#grid-container");


// const gridElement = container.createElement("div");

for (let x = 0; x < 256; x++) {
    const gridElement = document.createElement('div');
    container.appendChild(gridElement);
    gridElement.classList.add("grid-item");
}

// const items = document.querySelector(".grid-item");

const items = Array.from(document.querySelectorAll('.grid-item'));
items.forEach(item => item.addEventListener('mouseover', () => {
        item.classList.add("selected")
        
}));



