class Pipe {

    constructor(velocity = 1, pipe_width = 20, difficulty_factor = 1) {
        this.gap_size = Math.random(height) * difficulty_factor;
        this.gap_size = (Math.random() * height * 0.9) / difficulty_factor;
        this.x = width; // Start at the far right of the screen
        this.velocity = velocity * difficulty_factor; // More difficuty means smaller gaps and faster movement
        this.pipe_width = pipe_width * difficulty_factor;  // More difficulty means wider pipes
        this.top_height = height - ((height - this.gap_size) / 2);
        this.bottom_height = this.top_height + this.gap_size;
    }

    move() {
        this.x -= this.velocity;
    }

    show() {
        stroke(255);
        fill(255);
        // Draw the top section
        rect(this.x, 0, this.pipe_width, this.top_height);
        // Draw the bottom section
        rect(this.x, this.bottom_height, this.pipe_width, height);
    }

}
