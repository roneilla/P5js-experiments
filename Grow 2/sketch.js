let circles = [];

let r;
let theta, vel, acc;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = height * 0.45;
    theta = 0;
    vel = 0;
    acc = 0.001;
}

function draw() {
    background(0);

    let x = r * cos(theta);
    let y = r * sin(theta);

    if (frameCount % 30 == 0) {
        circles.push(new Circle(x, y));
    }

    for (let i = 0; i < circles.length; i++) {
        circles[i].display();
    }

    vel += acc;
    theta += vel;

}
class Circle {
    diam = 0;
    c = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diam = 0;
        this.c = 0;
        colorMode(HSL, 360);

    }

    display() {
        if (this.c >= 360) {
            this.c = 0;
        } else {
            this.c++;
        }

        strokeWeight(2);
        stroke(this.c, 255, 255);
        noFill();
        ellipse(this.x, this.y, this.diam, this.diam);

        this.diam += 10;
    }

}
