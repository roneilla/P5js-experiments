let syne;

let points;
let bounds;

let name = "RONEILLA";
let size = 150;

let colour = 0;

var moving = false;

function preload() {
    font = loadFont('assets/Syne-Bold.ttf');

}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    x = 100;
    y = height / 2;
    points = font.textToPoints(name, x, y, size);
    noStroke();
    fill(0);
    colorMode(HSB, 360);
}

function draw() {
    //  blendMode(BLEND);

     background(0, 30);
    textSize(size);
    fill(255);

    //blendMode(ADD);



    for (let i = 0; i < points.length; i++) {

        let c = noise(i + frameCount * 0.01) * 255;


        let pt = points[i];

        let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
        let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;

        if (mouseIsPressed) {
            //            points = font.textToPoints("KATIE!!!", x, y, size);
            if (moving) {
                moving = false;
            } else {
                moving = true;
            }

        }

        if (moving) {
            pt.x += noise(i * 10.1 + frameCount * 0.01) * 2 - 1.0;
            pt.y += noise(i * 10.2 + frameCount * 0.01) * 2 - 1.0;
        }


        colour = map(i, 0, points.length, 0, 360);

        fill(colour, 255, 255);
        ellipse(pt.x + nx + random(0, 2.5), pt.y + ny + random(0, 2.5), 3);

    }

}
