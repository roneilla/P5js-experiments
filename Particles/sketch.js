let mover = [];

var num = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    frameRate(30);
    ellipseMode(RADIUS);

    for (var i = 0; i < num; i++) {
        mover[i] = new Particle(random(0, width), random(0, height));
    }

}

function draw() {
    background(0);
    fill(255);
    for (var i = 0; i < num; i++) {
        mover[i].show();
        mover[i].update();
        
        if (mover[i].x)
    }

}

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.rad = 1;

    this.xspeed = 2;
    this.yspeed = 2;

    this.xdirection = random(-1, 1);
    this.ydirection = random(-1, 1);

    this.behaviors = function () {
        var arrive = this.arrive(this.target);
        var mouse = createVector(mouseX, mouseY);
        var flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(10);

        //this.applyForce(arrive);
        this.applyForce(flee);
    }


    this.arrive = function (target) {

    }

    this.flee = function (target) {
        var desired = p5.Vector.sub(target, this.pos);
        var distance = desired.mag();
        if (distance < 250) {
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            var steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxforce);

            return steer;
        } else {
            return createVector(0, 0);
        }
    }


    this.show = function () {
        this.x = this.x + this.xspeed * this.xdirection;
        this.y = this.y + this.yspeed * this.ydirection;

        ellipse(this.x, this.y, this.rad);
    }

    this.update = function () {
        if (this.x > width - this.rad || this.x < this.rad) {
            this.xdirection *= -1;
        }
        if (this.y > height - this.rad || this.y < this.rad) {
            this.ydirection *= -1;
        }
    }


}
