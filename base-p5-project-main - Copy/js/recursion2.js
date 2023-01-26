let slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    slider = createSlider(0, 100, 0);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw(){
    background(000000);
    resetMatrix();
    translate(width/2, height);
    branch(200 + slider.value());
}
function branch(len){ // length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 20, 250, 1, 10));
    stroke(255);
    line(0,0,0,-len);
    translate(0, -len);
    if(len > 20){
        if(len < 50){
            // leaves
            fill(255, 100);
            let size = 15 + random(15);
            noStroke();
           push();
           rotate(random(-20,90));
           pop();
           triangle(-size/2, 0, size/2, 0, 0, -size);
           rotate(-45, 45);
           triangle(-size/4, 0, size/4, 0, 0, -size);
           rotate(-90, 90);
           triangle(-size/4, 0, size/4, 0, 0, -size);
        }else{
            // branch 1
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.85);
            pop();
            // branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.75);
            pop();  
            // branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.65);
            pop();  
            // branch 4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len*0.55);
            pop();   
        }  
    } 
}
