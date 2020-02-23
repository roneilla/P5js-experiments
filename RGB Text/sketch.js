let a = 0;
let b = 0;

let synel

function preload() {
    syne = loadFont('assets/Syne-Bold.ttf');

}


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    blendMode(BLEND);
    background(0, 25);
    fill(255);
    textSize(50);
    //    text("KATIE BURTON", a, 50);
    //    text("KATIE BURTON", b, 100);

    var f = width / 2;
    var g = height / 2;

    a = map(mouseY, 0, height, f, f + 20);
    b = map(mouseY, 0, height, f, f - 20);
    c = map(mouseY, 0, width, 0, 20);

    textFont(syne);
    blendMode(ADD);
    textAlign(CENTER);
    
    for (var i = 50; i < innerHeight; i += 50) {
        fill(255, 0, 0);
        text("KATIE BURTON", a, i - c);
        fill(0, 0, 255);
        text("KATIE BURTON", width / 2, i);
        fill(0, 255, 0);
        text("KATIE BURTON", b, i + c);
    }
   
    //    for (var i = 100; i < 400; i += 100) {
    //        text("KATIE BURTON", a, i);
    //        text("KATIE BURTON", b, i);
    //    }

    //    if (a >= width) {
    //        a = 0;
    //    } else {
    //        a++;
    //    }
    //
    //    if (b <= 0) {
    //        b = width;
    //    } else {
    //        b--;
    //    }


}
