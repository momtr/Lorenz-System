// point P = (x|y|z) 
let x = 0.01;
let y = 0;
let z = 0;

// our constants: sigmoid, rho and beta
let a = 10;
let b = 28;
let c = 8/3;

// define the time-step-size 
let dt = 0.01;

// new array of points
let points = [];

// called when the sketch is launched
function setup() {
    // create a new canvas and use WEBGL, since we want to work with 3D points
    createCanvas(800, 600, WEBGL);
    // set the color mode to HSB
    colorMode(HSB);
}

// called every tick
function draw() {
    // use orbit control to move around in the 3D space
    orbitControl();
    // set background color to black
    background(0);
    // calculate dx, dy and dz and add them to x, y and z to obtain a new point
    x += (a * (y - x)) * dt;
    y += (x * (b - z) - y) * dt;
    z += (x * y - c * z) * dt;
    // push the new point to the array
    points.push(createVector(x, y, z));

    scale(5);
    // the value for H (HSB) is zero 
    let val = 0;
    // every tick, loop through all points 
    for(let i = 0; i < points.length - 1; i++) {
        // define the color of the line 
        stroke(val, 255, 255);
        // val should be in [0;255]
        val += 0.1;
        if(val > 255)
            val = 0;
        // draw a line between the current and the next point
        line(points[i].x, points[i].y, points[i].z, points[i+1].x, points[i+1].y, points[i+1].z);
    }

}