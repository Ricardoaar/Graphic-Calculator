import Drawer from "./services/drawer.js";
import Checker from "./services/checker.js";

const GRAPH_COUNTER_NAME = "graphs";

const canvas = document.querySelector("#plane");
const drawer = new Drawer(canvas, 25, "bold  1.4rem roboto");


const graphBtn = document.querySelector("#graph");
const pointBtn = document.querySelector("#point");
const restartBtn = document.querySelector("#restart");


function drawBar() {
    const x = document.querySelector("#coord_x").value;
    const y = document.querySelector("#coord_y").value;


    if (!Checker.checkIfHigher(GRAPH_COUNTER_NAME, 5)) {
        if (Checker.checkInRange(x, -40, 40)) {
            if (Checker.checkInRange(y, -40, 40)) {
                Checker.plusCounter(GRAPH_COUNTER_NAME, 1);
                const color = document.querySelector("#color");
                drawer.drawBar(x, y, color.value);
            }
        }
    }
}


function drawPoint() {
    const x = document.querySelector("#coord_x").value;
    const y = document.querySelector("#coord_y").value;


    if (Checker.checkInRange(x, -40, 40)) {
        if (Checker.checkInRange(y, -40, 40)) {

            const color = document.querySelector("#color");
            drawer.drawPoint(x, y, color.value);

        }
    }


}


pointBtn.addEventListener("click", () => {
    drawPoint();

})
graphBtn.addEventListener("click", drawBar);


restartBtn.addEventListener("click", () => {
    Checker.restartCounter(GRAPH_COUNTER_NAME, 0);
    drawer.drawAxis();
});

window.addEventListener("load", () => {
    drawer.drawAxis();
    Checker.restartCounter(GRAPH_COUNTER_NAME, 0);
});



