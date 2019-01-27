class Bird {

    constructor(y) {
        this.x = width / 5;
        this.y = y;
        this.velocity = 0;
        this.lift = 3;  // How much do we get from one flap
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 25);
    }

    move() {
        let gravity = 0.1;
        this.velocity += gravity;
        this.y += this.velocity;
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    flap() {
        this.velocity -= this.lift;
    }
}