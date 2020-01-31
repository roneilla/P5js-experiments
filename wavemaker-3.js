let t = 0;
let c = 0;
let newAngle = 0;
let diameter;

function setup() {
    createCanvas(innerWidth, innerHeight);
    diameter = 60;
    noStroke();
}

function draw() {

    background(0);
    let d1 = 0 + (sin(newAngle + PI / 2) * diameter) / 2 + diameter / 2;
    let d2 = 15 + (sin(newAngle + PI / 2) * diameter) / 2 + diameter / 2;
    let d3 = 30 + (sin(newAngle + PI / 2) * diameter) / 2 + diameter / 2;
    let d4 = 45 + (sin(newAngle + PI / 2) * diameter) / 2 + diameter / 2;
    let d5 = 60 + (sin(newAngle + PI / 2) * diameter) / 2 + diameter / 2;

    for (let x = 0; x <= width; x = x + 75) {
        for (let y = 0; y <= height; y = y + 75) {

            const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
            const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

            const angle = xAngle * (x / width) + yAngle * (y / height);

            const myX = x + 40 * cos(2 * PI * t + angle);
            const myY = y + 40 * sin(2 * PI * t + angle);

            if (mouseIsPressed) {
                d1 = 0;
                d2 = 0;
                d3 = 0;
            }
            //noStroke();
            stroke(125);
            strokeWeight(0.5);
            fill(0, 0);
            ellipse(myX, myY, d1, d1);
            ellipse(myX, myY, d2, d2);
            ellipse(myX, myY, d3, d3);
            ellipse(myX, myY, d4, d4);
            ellipse(myX, myY, d5, d5);

        }
    }

    t = t + 0.005;
    newAngle += 0.02;

}
