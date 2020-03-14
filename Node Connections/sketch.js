var numberOfNodes = 100;
var maxSpeed = 0.5;
var nodes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < numberOfNodes; i++) {
        nodes[i] = new Node(random(width), random(height), random(maxSpeed), random(-1, 1), random(-1, 1));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].move();
        nodes[i].display();
    }
}


function Node(xpos, ypos, speed, rise, run) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = speed;
    this.rise = rise;
    this.run = run;
    this.distance = 100;
    this.rad = 2;

    this.display = () => {
        noStroke();
        fill(255);
        ellipse(this.xpos, this.ypos, this.rad);

        for (var i = 0; i < nodes.length; i++) {
            if (abs(xpos - nodes[i].xpos) < this.distance && abs(ypos - nodes[i].ypos) < this.distance) {
                this.strokeWeight = (abs(this.xpos - nodes[i].xpos) + abs(this.ypos - nodes[i].ypos)) / 2;
               // strokeWeight(0.25);
               // stroke(255);
                stroke(255, this.distance - this.strokeWeight);
                line(this.xpos, this.ypos, nodes[i].xpos, nodes[i].ypos);
            }
        }
    }

    this.move = () => {
        this.xpos = this.xpos + (this.speed * this.run);
        this.ypos = this.ypos + (this.speed * this.rise);
        if (this.xpos > width) {
            this.xpos = 0;
        } else if (this.ypos > height) {
            this.ypos = 0;
        } else if (this.xpos < 0) {
            this.xpos = width;
        } else if (this.ypos < 0) {
            this.ypos = height;
        }

    }
}
