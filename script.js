const container = document.querySelector("div.container");

for (let i = 0; i < 16 * 16; ++i) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
}

container.addEventListener("mouseover", (event) => {
    let cell = event.target;
    cell.style.backgroundColor = "black";
});