//var xoff1 = 0;
//var xoff2 = 10000;

var inc = 0.05;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield = [];

function setup() {
    createCanvas(200, 200);
    frameRate(60);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);

    fr = createP('');

    for (var i = 0; i < 100; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    background(255);

    var yoff = 0;

    for (var y = 0; y < height; y++) {
        var xoff = 0;

        for (var x = 0; x < width; x++) {

            var index = x + y * cols;

            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);

            v.setMag(0.1);

            flowfield[index] = v;

            xoff += inc;
            stroke(0, 50);
            push();
            translate(x * scl, y * scl);
            rotate(v.heading());
            strokeWeight(1);
            line(0, 0, scl, 0);

            pop();
        }
        yoff += inc;

        //        zoff += 0.01;

    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
        particles[i].edges();
    }


    fr.html(floor(frameRate()));
    //    noLoop();
}
