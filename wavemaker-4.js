// :( //

let t = 0;
let c = 0;
let newAngle = 0;
let diameter;
let circles = [];

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

            circles.push(new Circle(myX, myY));
        }
    }

    for (let i = 0; i < circles.length; i++) {
        circles[i].display();

//        if (circles[i].diam == 5) {
//            delete circles[i];
//        }
       console.log(circles[i].diam);
    }
    
    t = t + 0.005;
    newAngle += 0.02;

}

class Circle {
    diam = 0;
    c = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diam = 0;
        this.c = 0;
        colorMode(HSL, 360);

    }

    display() {
        if (this.c >= 360) {
            this.c = 0;
        } else {
            this.c++;
        }

        strokeWeight(1);
        stroke(this.c, 255, 255);
        noFill();
        ellipse(mouseX, mouseY, this.diam, this.diam);

        this.diam += 10;
        
        if(this.diam == 50){
            this.diam=0;
        }
    }

}
