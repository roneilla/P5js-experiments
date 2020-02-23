var x, y;

function setup() {
    createCanvas(1920, 1080);
    frameRate(60);
}

function draw() {
    x = (1920 / 2);
    y = (1080 / 2);

    background(25);

    fill(255, 0, 0);
    textAlign(CENTER);
    textSize(500);
    text('HELLO', x + mouseX / 100, y + mouseY / 100);

    fill(0, 0, 255);
    textAlign(CENTER);
    textSize(500);
    text('HELLO', x - mouseX / 100, y - mouseY / 100);

    fill(0, 255, 0);
    textAlign(CENTER);
    textSize(500);
    text('HELLO', x + mouseX / 50, y + mouseY / 50);

    fill(255);
    textAlign(CENTER);
    textSize(500);
    text('HELLO', x, y);

}
