let canvas = document.querySelector("#plane")
let ctx = canvas.getContext('2d')
let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
let cameraZoom = 1
let MAX_ZOOM = 5
let MIN_ZOOM = 0.1
let SCROLL_SENSITIVITY = 0.0005

//
canvas.addEventListener('onMouseOver', function () {

});


let lastZoom = cameraZoom


function adjustZoom(zoomAmount, zoomFactor) {
    if (zoomAmount) {
        cameraZoom += zoomAmount
    } else if (zoomFactor) {
        cameraZoom = zoomFactor * lastZoom
    }
    cameraZoom = Math.min(cameraZoom, MAX_ZOOM);
    cameraZoom = Math.max(cameraZoom, MIN_ZOOM);
}


document.addEventListener('keydown', (event) => {
    console.log(event.keyCode);

    if (!(event.keyCode === 83 || event.keyCode === 87)) {
        return;
    }
    adjustZoom((event.keyCode === 83 ? -1 : 1) * SCROLL_SENSITIVITY);
})


ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
ctx.scale(cameraZoom, cameraZoom)
ctx.translate(-window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y)