var dog, happyDog, dogSprite; 
var database, foodS, foodStock;

function preload()
{
    dog = loadImage("images/dogImg.png");
    happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dogSprite = createSprite(250, 250, 50, 50);
  dogSprite.addImage(dog);
  dogSprite.scale = 0.10;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyPressed(UP_ARROW)){
    writeStock(foodS);
    dogSprite.addImage(happyDog);
  }
  drawSprites();
  text("Food remaining: " + foodStock, 240, 250);
  text("Press the up arrow key to feed the dog", 80, 80);
}
function readStock(data){
  foodS = data.val(data);
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

