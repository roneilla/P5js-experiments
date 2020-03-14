let font, pts, colour;
let textEl = 5;
var points = [];
var theme = ['rgb(255,0,0)', 'rgb(0,255,0)', 'rgb(0,0,255)'];
let currentTime = 0;

var textDist = 30;

function preload() {
    font = loadFont('/fonts/RobotoMono-Medium.ttf');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    textAlign(CENTER);
    background(0);

    for (var px = 20; px < width - 50; px += textDist) {
        for (var py = 20; py < height - 50; py += textDist) {
            //  var point = points_array[i];
            var vehicle = new Vehicle(px, py);
            points.push(vehicle);
        }
    }

    frameRate(60);
}

function ns(x, y, z, scale_, min_, max_) {
    return map(
        noise(x * scale_, y * scale_, z * scale_),
        0, 1, min_, max_);
}

let xz = 0;
let yz = 1000;

let xz2 = 0;
let yz2 = 1000;

let xz3 = 0;
let yz3 = 1000;

function draw() {
    blendMode(BLEND);
    background(0);
    noStroke();
    xz += 1;
    yz += 1;
    xz2 += 1.1;
    yz2 += 1.1;
    xz3 += 1.2;
    yz3 += 1.2;
    blendMode(BLEND);
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        point.update();
        point.behaviors();
        fill(255);
        point.show();
    }
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 10, 10);

}

function Vehicle(x, y) {
    // this.pos = createVector(x, y);
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.target = createVector(random(width), random(height));
    this.r = 8;
    this.maxspeed = 10;
    this.maxforce = 0.2;
    this.xspeed = 5;
    this.yspeed = 5;
    this.rad = 2;
    this.xdirection = random(-1, 1);
    this.ydirection = random(-1, 1);
    this.bounds = 300;


    this.behaviors = function () {
        this.target = createVector(this.pos.x, this.pos.y);
        var arrive = this.arrive(this.target);
        var mouse = createVector(mouseX, mouseY);
        var flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(10);

        this.applyForce(arrive);
        this.applyForce(flee);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.arrive = function (target) {
        var desired = p5.Vector.sub(target, this.pos);
        var distance = desired.mag();
        var speed = this.maxspeed;
        if (distance < this.bounds) {
            speed = map(distance, 0, this.bounds, 0, this.maxspeed);
        }

        desired.setMag(speed);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
    }

    this.flee = function (target) {
        var desired = p5.Vector.sub(target, this.pos);
        var distance = desired.mag();
        if (distance < this.bounds) {
            //                this.xdirection *= -1;
            //                this.ydirection *= -1;
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            var steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxforce);
            return steer;
        } else {
            return createVector(0, 0);
        }
    }

    this.update = function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
        if (this.pos.x > width - this.rad || this.pos.x < this.rad) {
            this.xdirection *= -1;
        }
        if (this.pos.y > height - this.rad || this.pos.y < this.rad) {
            this.ydirection *= -1;
        }
    }

    this.show = function () {
        this.pos.x = this.pos.x + this.xspeed * this.xdirection;
        this.pos.y = this.pos.y + this.yspeed * this.ydirection;

        noStroke();
        ellipse(this.pos.x, this.pos.y, this.rad);

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
