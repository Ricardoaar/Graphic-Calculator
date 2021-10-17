class Drawer {
    constructor(canvas, unit, font) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.unit = unit;
        this.font = font;
    }

    setValues() {
        const style = getComputedStyle(canvas);
        canvas.width = parseInt(style.width);
        canvas.height = parseInt(style.height);

        this.width = canvas.width;
        this.height = canvas.height;
        this.start = -(this.width / this.unit) / 2;
    }

    drawAxis(colors =
                 {
                     lowAxis: "rgba(15,15,15,0.2)",
                     mainAxis: "#ffffff",
                     numbers: "rgba(15,15,15,0.6)"
                 }
    ) {
        this.setValues();
        this.ctx.font = this.font;
        for (let i = 0; i < this.width / this.unit; i++) {
            this.ctx.fillStyle = colors.lowAxis;
            this.ctx.fillRect(i * this.unit, 0, 1.2, this.height);
            this.ctx.fillRect(0, i * this.unit, this.width, 1.2);
            this.ctx.fillStyle = colors.numbers;
            this.ctx.fillText(`${this.start + i}`, i * this.unit, this.height / 2);
            this.ctx.fillText(`${this.start + i}`, this.width / 2, i * this.unit);
        }

        this.ctx.fillStyle = colors.mainAxis;
        this.ctx.fillRect(0, this.height / 2, 10000, 1.2);
        this.ctx.fillRect(this.width / 2, 0, 1.2, 10000);
        this.currentGraphs = 0;
    }


    drawBar(x, y, color) {

        if (Math.abs(x) > 40 || Math.abs(y) > 40) {

            alert("Las coordenadas deben estar entre -40 y 40");
            return;
        }

        if (this.currentGraphs >= 5) {
            alert("Máximo 5 gráficas!");
            return;
        }

        const rgbColor = color.hexToRGB();
        this.ctx.fillStyle = `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},0.5)`;
        const barPositionX = this.width / 2 + x * this.unit - this.unit / 2;
        this.ctx.fillRect(barPositionX
            , this.height / 2,
            this.unit
            , -y * this.unit);
        this.currentGraphs++;
    }


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


export default Drawer;

