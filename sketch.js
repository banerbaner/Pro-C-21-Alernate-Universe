var bol0, bol1, bol2, bol3, bol4, bol5, bol6, bol7, bol8;
var pics0, pics1, pics2, pics3, pics4, pics5, pics6, pics7, pics8;
var sunSize = 100;
var sunnySize = 0.36;

function preload() {
  pics0 = loadImage("sprites/img0.png");
  pics1 = loadImage("sprites/img1.png");
  pics2 = loadImage("sprites/img2.png");
  pics3 = loadImage("sprites/img3.png");
  pics4 = loadImage("sprites/img4.png");
  pics5 = loadImage("sprites/img5.png");
  pics6 = loadImage("sprites/img6.png");
  pics7 = loadImage("sprites/img7.png");
  pics8 = loadImage("sprites/img8.png");
}

function setup() {
  createCanvas(400, 600);
  bol0 = createSprite(width / 2, height, 100, 100);
  bol1 = createSprite(width / 2, height * 7 / 8, 50, 50);
  bol2 = createSprite(width / 2, height * 6 / 8, 50, 50);
  bol3 = createSprite(width / 2, height * 5 / 8, 50, 50);
  bol4 = createSprite(width / 2, height * 4 / 8, 50, 50);
  bol5 = createSprite(width / 2, height * 3 / 8, 50, 50);
  bol6 = createSprite(width / 2, height * 2 / 8, 50, 50);
  bol7 = createSprite(width / 2, height * 1 / 8, 50, 50);
  bol8 = createSprite(width / 2, height * 0 / 8, 50, 50);

  bol0.scale = sunnySize;
  bol1.scale = 0.1;
  bol2.scale = 0.1;
  bol3.scale = 0.1;
  bol4.scale = 0.1;
  bol5.scale = 0.1;
  bol6.scale = 0.1;
  bol7.scale = 0.1;
  bol8.scale = 0.1;
  /*
    bol0.debug = true;
    bol1.debug = true;
    bol2.debug = true;
    bol3.debug = true;
    bol4.debug = true;
    bol5.debug = true;
    bol6.debug = true;
    bol7.debug = true;
    bol8.debug = true;
  */
  bol0.setCollider('circle', 0, 0, sunSize);
  bol1.setCollider('circle', 0, 0, 120);
  bol2.setCollider('circle', 0, 0, 120);
  bol3.setCollider('circle', 0, 0, 120);
  bol4.setCollider('circle', 0, 0, 120);
  bol5.setCollider('circle', 0, 0, 120);
  bol6.setCollider('circle', 0, 0, 120);
  bol7.setCollider('circle', 0, 0, 120);
  bol8.setCollider('circle', 0, 0, 120);

  bol1.velocityX = 1.607;
  bol2.velocityX = 1.174;
  bol3.velocityX = 1.000;
  bol4.velocityX = 0.802;
  bol5.velocityX = 0.434;
  bol6.velocityX = 0.323;
  bol7.velocityX = 0.228;
  bol8.velocityX = 0.182;


}

function draw() {
  background(0);

  if (bol1.x > width + 30) {
    bol1.x = -30;
  }
  if (bol2.x > width + 30) {
    bol2.x = -30;
  }
  if (bol3.x > width + 30) {
    bol3.x = -30;
  }
  if (bol4.x > width + 30) {
    bol4.x = -30;
  }
  if (bol5.x > width + 30) {
    bol5.x = -30;
  }
  if (bol6.x > width + 30) {
    bol6.x = -30;
  }
  if (bol7.x > width + 30) {
    bol7.x = -30;
  }
  if (bol8.x > width + 30) {
    bol8.x = -30;
  }

  if (frameCount % 25 === 0) {
    console.log("100");
    sunnySize = sunnySize + 0.045;
    bol0.scale = sunnySize;
  }

  if (bol1.isTouching(bol0)) {
    bol1.destroy();
  }
  if (bol2.isTouching(bol0)) {
    bol2.destroy();
  } if (bol3.isTouching(bol0)) {
    bol3.destroy();
  } if (bol4.isTouching(bol0)) {
    bol4.destroy();
  } if (bol5.isTouching(bol0)) {
    bol5.destroy();
  } if (bol6.isTouching(bol0)) {
    bol6.destroy();
  } if (bol7.isTouching(bol0)) {
    bol7.destroy();
  } if (bol8.isTouching(bol0)) {
    bol8.destroy();
  }


  bol0.addImage("pic0", pics0);
  bol1.addImage("pic1", pics1);
  bol2.addImage("pic2", pics2);
  bol3.addImage("pic3", pics3);
  bol4.addImage("pic4", pics4);
  bol5.addImage("pic5", pics5);
  bol6.addImage("pic6", pics6);
  bol7.addImage("pic7", pics7);
  bol8.addImage("pic8", pics8);

  drawSprites();
}