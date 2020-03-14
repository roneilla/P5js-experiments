/*jshint esversion: 6 */

// polygon array and number of verts
let poly = [];

let pts;

var w, h;

function preload() {
    font = loadFont('../assets/Syne-Bold.ttf');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = width;
    h = height;
    pts = font.textToPoints('HELLO', width / 5, height / 2, 200, {
        sampleFactor: 0.5,
        simplifyThreshold: 0
    });
    strokeWeight(12);
    noFill();
    cursor(HAND);
    noStroke();

    for (let i = 0; i < pts.length; i++) {
        let a = {
            x: pts[i].x,
            y: pts[i].y
        }
        poly.push(a);
    }
}

function draw() {
    blendMode(BLEND);
    background(0, 0, 0);

    strokeWeight(4);

    blendMode(ADD);
    stroke(255, 0, 0);
    drawPoly(1000, 1000);

    stroke(0, 255, 0);
    drawPoly(1200, 1500);

    stroke(0, 0, 255);
    drawPoly(2000, 1700);

}

function logMap(value, start1, stop1, start2, stop2) {

    start2 = log(start2)
    stop2 = log(stop2)

    return exp(start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1)))
}

function drawPoly(dx, dy) {
    // draws polygon given vertices in the poly[] array, adds mouse bias using params

    let g = 0
    if (mouseIsPressed) {
        //  g = random(-2, 2)
    }

    beginShape()
    for (let i = 0; i < pts.length; i++) {
        let bias = dist(mouseX, mouseY, poly[i].x, poly[i].y)
        vertex(poly[i].x + dx / logMap(bias, w, 0, dx, 80) + g, poly[i].y + dy / logMap(bias, h, 0, dy, 80) + g)
    }
    endShape()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
