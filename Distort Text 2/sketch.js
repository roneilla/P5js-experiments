let font;
let pts;


function preload() {
    font = loadFont('assets/Syne-Bold.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeWeight(12);
    noFill();
    cursor(HAND);
    noStroke();
    n++; // add extra point for closing the polygon

    pts = font.textToPoints('HI THERE', 0, 0, 150, {
        sampleFactor: 0.9,
        simplifyThreshold: 0
    });

}

function draw() {
    // use default blend mode for background
    blendMode(BLEND);
    background(0);

    // use additive blend mode to separate color channels
    //blendMode(ADD)
    fill(255, 0, 0);

    for (let i = 0; i < pts.length; i++) {
        let bias = dist(mouseX, mouseY, pts[i].x, pts[i].y);
        ellipse(pts[i].x / logMap(bias, width, 0, pts[i].x, 45), pts[i].y / logMap(bias, height, 0, pts[i].y, 45), 3, 3);
    }


}
