var countDistancex=0
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  //platform1=new Platform(100);
 // platform2=new Platform(500);
 var gap=0;
  for(var i = 0;i<6;i++){


platform=new Platform(countDistancex);
gap=random([0,0,0,0,80]);
countDistancex=countDistancex+platform.rw+gap;


 }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

