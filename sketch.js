var ball;

var database,position;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

   database = firebase.database();

    var ballref = database.ref('ball/position');

    ballref.on("value" , readData , showError  );

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function readData(data){

 position = data.val();

 ball.x = position.x;
 ball.y = position.y;




}


function showError(error){

console.log(error);



}


function writePosition(x1,y1){


var ref = database.ref('ball/position');

ref.set(
    {  

  'x' : ball.x + x1,

  'y' : ball.y + y1

 }
 );


}










