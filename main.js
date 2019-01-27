console.log('main.js connected');

let bird;
let pipes = [];

function setup() {
    let canvas = createCanvas(600, 800);
    canvas.parent('canvas-container');
    bird = new Bird(height / 2);
    pipes.push(new Pipe());
}

function draw() {
    background(32);
    if (frameCount % 400 == 0) {
        pipes.push(new Pipe());
    }
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].move();
        pipes[i].show();
    }
    bird.move();
    bird.show();
}

function keyPressed() {
    console.log('FLAP ');

    if (key == " ") {
        bird.flap();
    }
}
