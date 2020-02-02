let c = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    blendMode(BLEND);
    background(0);

    noFill();
    strokeWeight(10);

    blendMode(ADD);

    var offset = map(mouseX, 0, windowWidth, 0, 50);



    stroke(255, 0, 0);
    ellipse(mouseX + 50, mouseY + 50, 500, 500);
    stroke(0, 255, 0);
    ellipse(mouseX, mouseY, 500, 500);
    stroke(0, 0, 255);
    ellipse(mouseX - 50, mouseY - 50, 500, 500);

}
