class Drawer {
    constructor(canvas, unit, font, wrapper) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.unit = unit;
        this.font = font;

        this.wrapper = wrapper || document.querySelector(".plane-wrapper");
    }

    setValues() {
        /*
        * Set values for canvas depending html object size
        * */
        const style = getComputedStyle(this.canvas);
        this.canvas.width = parseInt(style.width);
        this.canvas.height = parseInt(style.height);

        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.start = -(this.width / this.unit) / 2;
    }

    drawAxis(colors =
                 {
                     lowAxis: "rgba(15,15,15,0.2)",
                     mainAxis: "#000000",
                     numbers: "rgba(15,15,15,0.6)"
                 }
    ) {
        /*
        * Draw axis for plane.
        * */
        this.setValues();
        this.ctx.font = this.font;


        for (let i = 0; i < this.width / this.unit; i++) {
            this.ctx.fillStyle = colors.lowAxis;
            this.ctx.fillRect(i * this.unit, 0, 1.2, this.height);
            this.ctx.fillRect(0, i * this.unit, this.width, 1.2);
            this.ctx.fillStyle = colors.numbers;
            this.ctx.fillText(`${this.start + i}`, i * this.unit, this.height / 2 + this.unit / 2 + 2);
            this.ctx.fillText(`${-this.start - i}`, this.width / 2 + 2, i * this.unit);
        }
        this.ctx.fillStyle = colors.mainAxis;
        this.ctx.fillRect(0, this.height / 2, 10000, 1.2);
        this.ctx.fillRect(this.width / 2, 0, 1.2, 10000);
        this.wrapper.scroll(this.width / 4, this.height / 4);
    }

    drawPoint(x, y, color) {
        this.ctx.fillStyle = color;
        const xPosition = this.width / 2 + x * this.unit - this.unit / 2;
        const yPosition = this.height / 2 - y * this.unit - this.unit / 2;
        this.ctx.beginPath();

        this.ctx.arc(xPosition + this.unit / 2, yPosition + this.unit / 2, this.unit / 4, 0, 2 * Math.PI, true);
        this.ctx.fill();


    }

    drawBar(x, y, color) {
        const rgbColor = color.hexToRGB();
        this.ctx.fillStyle = `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},0.8)`;
        const barPositionX = this.width / 2 + x * this.unit - this.unit / 2;
        this.ctx.fillRect(barPositionX
            , this.height / 2,
            this.unit
            , -y * this.unit);
    }


}

String.prototype.hexToRGB = function () {
    if (this.length !== 6) {
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

