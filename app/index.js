import drawer from "./services/drawer.js";


const graphBtn = document.querySelector("#graph")


function getBarPosition() {
    const color = document.querySelector("#color");
    const x = document.querySelector("#coord_x").value;
    const y = document.querySelector("#coord_y").value;
    drawer.drawBar(x, y, color.value);
}

graphBtn.addEventListener("click", getBarPosition);

drawer.getValues();
drawer.drawAxis();


