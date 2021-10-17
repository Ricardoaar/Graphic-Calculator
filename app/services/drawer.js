//Getting necessary components
const canvas = document.querySelector("#plane");
const parent = document.querySelector(".plane-wrapper");
const ctx = canvas.getContext("2d");
const unit = 50;
ctx.font = "1.4rem Arial";
let width;
let height;
let start;


const getValues = () => {
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width);
    canvas.height = parseInt(style.height);

    width = canvas.width;
    height = canvas.height;
    start = -(width / unit) / 2;
}


function drawAxis(colors =
                      {
                          lowAxis: "rgba(15,15,15,0.2)",
                          mainAxis: "#ffffff",
                          numbers: "rgba(15,15,15,0.6)"
                      }
) {

    for (let i = 0; i < width / unit; i++) {
        ctx.fillStyle = colors.lowAxis;
        ctx.fillRect(i * unit, 0, 1.2, height);
        ctx.fillRect(0, i * unit, width, 1.2);
        ctx.fillStyle = colors.numbers;
        ctx.fillText(`${start + i}`, i * unit, height / 2);
        ctx.fillText(`${start + i}`, width / 2, i * unit);
    }

    ctx.fillStyle = colors.mainAxis;
    ctx.fillRect(0, height / 2, 10000, 1.2);
    ctx.fillRect(width / 2, 0, 1.2, 10000);

}


function AppendLines(x, y) {
}

function drawBar(x, y, color) {
    const rgbColor = color.hexToRGB();
    ctx.fillStyle = `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},0.5)`;
    const barPositionX = width / 2 + x * unit - unit / 2;
    ctx.fillRect(barPositionX
        , height / 2,
        unit
        , -y * unit);


}


String.prototype.hexToRGB = function () {
    if (this.length !== 6) {
        console.log(this.substring(1).length === 6);
        if (this.substring(1).length !== 6) {
            throw "number must have 6 characters";
        }
    }

    let rgbHex;
    if (this[0] === "#") {
        rgbHex = this.substring(1).match(/.{1,2}/g);
    } else {
        rgbHex = this.match(/.{1,2}/g);
    }


    return {
        r: parseInt(rgbHex[0], 16),
        g: parseInt(rgbHex[1], 16),
        b: parseInt(rgbHex[2], 16)
    };
}


export default {
    drawAxis, getValues, drawBar
};

