console.log('main.js connected');

let bird;

function setup() {
    let canvas = createCanvas(600, 800);
    canvas.parent('canvas-container');
    bird = new Bird(height / 2);
}

function draw() {
    background(32);
    bird.move();
    bird.show();
}

function keyPressed() {
    console.log('FLAP ');

    if (key == " ") {
        bird.flap();
    }
}
