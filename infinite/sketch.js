var canvas
var desert, backgroundImage;
var player, playerImage, walkani, backwardsani;
var invisibleGround;
var block, blockImage, blocks, blocksImage;

function preload(){
    backgroundImage = loadImage("./assets/desert1.jpg");
    playerImage = loadImage("./assets/characterIdle.png");
    blockImage = loadImage("./assets/woodblock.jpg");
    blocksImage = loadImage("./assets/woodblocks.png");
    backwardsani = loadAnimation("./assets/character backward walk2.png","./assets/character backward.png","./assets/character backward walk1.png","/assets/character backward.png");
    walkani = loadAnimation("./assets/characterWalk1.png","./assets/characterWalk2.png","./assets/characterWalk3.png","./assets/characterWalk2.png");
}

function setup(){
    canvas = createCanvas(1400,800)
    desert = createSprite(200, 200, 1400, 800);
    desert.addImage(backgroundImage);
    player = createSprite(250,520,10,10);
    player.addImage(playerImage);
    player.scale = 0.4;
    block = createSprite(600,520,10,10);
    block.addImage(blockImage);
    block.scale = 0.4;
    //blocks = createSprite(800,400,10,10);
    //blocks.addImage(blocksImage);
    //blocks.scale = 0.4;
    invisibleGround = createSprite(250,535,4000,10);
    invisibleGround.visible = false;
    player.addAnimation("walk",walkani);
    player.addAnimation("backwards",backwardsani);
    
    //createEdgeSprites();
    //var bricks = createGroup();
    //bricks.addImage(blockImage);
    //createBrickRow(600,"red");
    //createBrickRow(65+29,"orange");
    //createBrickRow(65+29+29,"green");
    //createBrickRow(65+29+29+29,"yellow");
    //function createBrickRow(y,color){
    // for(var e=0;e<6;e=e+1){
    // var brick=createSprite(65+54*e,y,50,25);
    //brick.shapeColor = color;
    // bricks.add(brick);
    //}
    //}
}

function draw(){
    background("black");
    if(keyDown("up")){
        player.velocityY = -10;
    }
    player.velocityY = player.velocityY + 0.9
    player.collide(invisibleGround);
    player.collide(block);
    //player.collide(blocks);
    //invisibleGround.velocityX = player;
    if(keyDown("right")){
        player.velocityX = player.velocityX + 0.3;
        player.changeAnimation('walk');
    }
    if(keyDown("left")){
        player.velocityX = player.velocityX - 0.3;
        player.changeAnimation('backwards');
    }
    drawSprites();
}