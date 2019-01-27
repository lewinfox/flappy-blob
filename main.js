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
        pipes[i].hits_bird(bird);
        pipes[i].show();
    }
    bird.move();
    bird.show();
    if (pipes.length > 10) {
        console.log('removing pipe');
        pipes.shift(1, 1);
        console.log(pipes.length);
    }
}

function keyPressed() {
    if (key == " ") {
        bird.flap();
    }
}
