var serial; // instance of the serialport library
var portName = '/dev/ttyS0'; // fill in your serial port name here

var data;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();

    serial = new p5.SerialPort(document.location.hostname);
    serial.on('list', printList);
    serial.on('data', serialEvent);
    serial.open(portName);

}


function draw() {
    background(0);
    fill(255);
    data = serial.readLine();
    textSize(50);
    text(data, width / 2, height / 2);
}

function serialEvent() {
    // read a line of text in from the serial port:

    data = serial.readLine();
    console.log(data);
    // if you've got a valid line, convert it to a number:
    //    if (data.length > 0) {
    //        dataIn = in);
    //    }
    // send a byte to the microcontroller
    // to prompt it to respond with another reading:
    serial.write('x');
}

function printList(portList) {
    // portList is an array of serial port names:
    for (var i = 0; i < portList.length; i++) {
        console.log(i + ' ' + portList[i]);
    }
}
