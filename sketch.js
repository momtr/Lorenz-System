let x = 0.01;
let y = 0;
let z = 0;
let a = 10;
let b = 28;
let c = 8/3;
let dt = 0.01;

let points = [];

function setup() {
    createCanvas(800, 600, WEBGL);
    colorMode(HSB);
}

function draw() {
    orbitControl();
    background(0);
    x += (a * (y - x)) * dt;
    y += (x * (b - z) - y) * dt;
    z += (x * y - c * z) * dt;
    points.push(createVector(x, y, z));

    scale(5);
    let val = 0;
    for(let i = 0; i < points.length - 1; i++) {
        stroke(val, 255, 255);
        val += 0.1;
        if(val > 255)
            val = 0;
        line(points[i].x, points[i].y, points[i].z, points[i+1].x, points[i+1].y, points[i+1].z);
    }

}