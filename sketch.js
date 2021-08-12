const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var snow1 = []; //null array
var snowman;
var engine, world;
var maxSnow=40

function preload(){

  back = loadImage("snow1.jpg");

}
function setup() {
 var canvas= createCanvas(800,500);
 engine = Engine.create();
  world = engine.world;

 snowman = new Snowman(400, 300, 200, 250)


 if(frameCount % 80 === 0){

  for(i=0; i<maxSnow; i++){
    snow1.push(new snow(random(0,800),0))
  }
}


}

function draw() {
  background(back)
  
 snowman.display();

  for(var i = 0 ; i<maxSnow ; i++){

    //snow1= [s1,s2,s3....] --> snow1[0] , snow1[1]
    snow1[i].display()
  }
}