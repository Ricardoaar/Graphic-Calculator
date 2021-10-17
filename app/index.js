import Drawer from "./services/drawer.js";

const canvas = document.querySelector("#plane");

const drawer = new Drawer(canvas, 25, "bold  1.4rem roboto");
const graphBtn = document.querySelector("#graph");
const restartBtn = document.querySelector("#restart");


function getBarPosition() {
    const color = document.querySelector("#color");
    const x = document.querySelector("#coord_x").value;
    const y = document.querySelector("#coord_y").value;
    drawer.drawBar(x, y, color.value);
}

graphBtn.addEventListener("click", getBarPosition);
restartBtn.addEventListener("click", () => {
    drawer.drawAxis();
});

drawer.drawAxis();


