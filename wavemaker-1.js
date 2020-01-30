// Original code: Wavemaker
// Contributed by Aatish Bhatia, inspired by Orbiters by Dave Whyte.
// https://p5js.org/examples/interaction-wavemaker.html

let t = 0; // time variable
let c = 0;

function setup() {
    createCanvas(innerWidth, innerHeight);
    noStroke();
    // colorMode(HSB);
}

function draw() {

    background(255);
    //
    //    if (c >= 360) {
    //        c = 0;
    //    } else {
    //        c++;
    //    }

    fill(125);


    for (let x = 0; x <= width; x = x + 20) {
        for (let y = 0; y <= height; y = y + 20) {

            const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
            const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

            const angle = xAngle * (x / width) + yAngle * (y / height);

            const myX = x + 200 * cos(2 * PI * t + angle);
            const myY = y + 200 * sin(2 * PI * t + angle);

            ellipse(myX, myY, 3);
        }
    }

    t = t + 0.005;

}