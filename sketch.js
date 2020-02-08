let syne;

let points;
let bounds;

let name;
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
    name = "KATIE!";
    noStroke();
    fill(0);
}

function draw() {

    background(0,10);
    textSize(size);
    
     points = font.textToPoints(name, x, y, size);

    for (let i = 0; i < points.length; i++) {
        let c = noise(i + frameCount * 0.01) * 255;
        let pt = points[i];
        let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
        let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;

        //            pt.x += noise(i * 10.1 + frameCount * 0.01) * 2 - 1.0;
        //            pt.y += noise(i * 10.2 + frameCount * 0.01) * 2 - 1.0;

       
        fill(125, 125, 0);
        ellipse(pt.x + nx + random(0, 2.5), pt.y + ny + random(0, 2.5), 3);
    }
}
