
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat!.png");
    jerryimg1 = loadImage("images/mouse!.png");
    catimg2 = loadImage("images/cat2.png","images/cat3.png");
    jerryimg2 = loadImage("images/mouse2.png","images/mouse3.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var Tom = createSprite(200,200 50,50);
    var Jerry = createSprite(200,300,30,30); 
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
