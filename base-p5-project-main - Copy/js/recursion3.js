let pink1, pink2, slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    pink1 = color('#faa5bc');
    pink2 = color('#ff7d12');
    slider = createSlider(0, 100, 0);
    slider.position(10, windowHeight - 40);
    slider.style("width", "200px");
    slider.input(draw);
}
function draw(){
    background(66, 135, 245);
    resetMatrix();
    translate(width/2, height);
    branch(200 + slider.value());
}
function branch(len){ // length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 20, 250, 1, 15));
    stroke(lerpColor(pink1, pink2, random(1)));    
    line(0,0,0,-len);
    translate(0, -len);
    if(len > 20){
        if(len < 50){
            // leaves
            let r = 200 + random(-20, 20);
            let g = 100 + slider.value();
            let b = 60 + random(-20, 20);
            fill(r,g,b, 100);
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
            rotate(random(-5, 5));
            branch(len*0.8);
            pop();
            // branch 2
            push();
            rotate(random(40, 50));
            branch(len*0.4);
            pop();  
            // branch 3
            push();
            rotate(random(-50, -40));
            branch(len*0.4);
            pop();
            // branch 4
            push();
            rotate(random(60, 70));
            branch(len*0.6);
            pop();   
            // branch 5
            push();
            rotate(random(-70, -60));
            branch(len*0.6);
            pop();   
           }  
        }  

    } 
