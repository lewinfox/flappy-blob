class Bird {

    constructor(y) {
        this.x = width / 5;
        this.y = y;
        this.velocity = 0;
        this.lift = 3;  // How much do we get from one flap
        this.x_rad = 25;
        this.y_rad = 25;
        this.fill_col = color(255, 255, 0);
    }

    show() {
        fill(this.fill_col);
        ellipse(this.x, this.y, this.x_rad, this.y_rad);
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
        this.fill_colour = color(0, 255, 0);
        this.velocity -= this.lift;
    }
}
