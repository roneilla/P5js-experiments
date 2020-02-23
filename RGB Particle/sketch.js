let syne;

let points;
let bounds;

let name = 'I LOVE YOU';
let size = 150;

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
}

function draw() {
    blendMode(BLEND);
    background(0);
    textSize(size);
    fill(255);



    for (let i = 0; i < points.length; i++) {

        let c = noise(i + frameCount * 0.01) * 255;


        let pt = points[i];

        let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
        let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;

        if (frameCount >= 120) {
            //        points = font.textToPoints("Welcome to my Portfolio", x, y, size);
            pt.x += noise(i * 10.1 + frameCount * 0.01) * 2 - 1.0;
            pt.y += noise(i * 10.2 + frameCount * 0.01) * 2 - 1.0;

        }
        blendMode(ADD);
        fill(255, 0, 0);
        ellipse(pt.x + nx + random(0,2.5), pt.y + ny + random(0,2.5), 3);
        fill(0, 255, 0);
        ellipse(pt.x + nx + random(0,2.5), pt.y + ny + random(0,2.5), 3);
        fill(0, 0, 255);
        ellipse(pt.x + nx + random(0,2.5), pt.y + ny + random(0,2.5), 3);



    }

}
