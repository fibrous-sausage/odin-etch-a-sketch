const container = document.querySelector("div.container");
const btn = document.querySelector("button");
const cells = [];

const COLORS = ["red", "green", "blue"];

function chooseRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function createCell(width, height) {
    const cell = document.createElement("div");

    cell.style.width = `${width}%`;
    cell.style.height = `${height}%`;
    cell.style.opacity = "0.1";
    return cell;
}

function createGrid(cellsPerSide) {
    const cells = [];
    for (let i = 0; i < cellsPerSide * cellsPerSide; ++i) {
        cells.push(createCell(100/cellsPerSide, 100/cellsPerSide));
    }
    return cells;
}

cells.push(...createGrid(16));
cells.forEach((cell) => container.appendChild(cell));

container.addEventListener("mouseover", (event) => {
    const cell = event.target;
    if (cell === container) return;

    if (cell.style.backgroundColor === "") {
        cell.style.backgroundColor = chooseRandomColor();
    }
    cell.style.opacity = Math.min(parseFloat(cell.style.opacity) + 0.1, 1);
});

btn.addEventListener("click", (event) => {
    const numOfCells = parseInt(prompt("How many cells per side?"));
    if (!Number.isInteger(numOfCells)) return;
    if (!(1 <= numOfCells && numOfCells <= 100)) return;

    for (let i = cells.length - 1; i >= 0; --i) {
        container.removeChild(cells[i]);
        cells.pop();
    }
    
    cells.push(...createGrid(numOfCells));
    cells.forEach((cell) => container.appendChild(cell));
});