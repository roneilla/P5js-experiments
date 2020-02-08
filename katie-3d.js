let a = 0;
let b = 0;

let synel

function preload() {
    syne = loadFont('assets/Syne-Bold.ttf');

}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
       blendMode(ADD);


}

function draw() {
//    translate(-width / 2, -height / 2);
    translate(-width/2,-height/2,0);
    background(0);
    fill(255);
    textSize(50);

    var f = width / 2;

    a = map(mouseY, 0, height, f, f + 20);
    b = map(mouseY, 0, height, f, f - 20);
    c = map(mouseY, 0, width, 0, 20);
    textFont(syne);
    textAlign(CENTER);

    for (var i = 50; i < innerHeight; i += 50) {
        fill(255, 10);
        text("KATIE BURTON", 200, i);
        text("KATIE BURTON", width / 2 + 400, i);
        fill(255, 0, 0);
        text("KATIE BURTON", a, i - c);
        fill(0, 0, 255);
        text("KATIE BURTON", width / 2, i);
        fill(0, 255, 0);
        text("KATIE BURTON", b, i + c);
    }

    console.log(blendMode);

}
