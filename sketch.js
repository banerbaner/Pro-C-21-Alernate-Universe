var bol0, bol1, bol2, bol3, bol4, bol5, bol6, bol7, bol8;

function setup() {
  createCanvas(400, 800);
  bol0 = createSprite(width / 2, height, 100, 100);
  bol1 = createSprite(width / 2, height * 7 / 8, 50, 50);
  bol2 = createSprite(width / 2, height * 6 / 8, 50, 50);
  bol3 = createSprite(width / 2, height * 5 / 8, 50, 50);
  bol4 = createSprite(width / 2, height * 4 / 8, 50, 50);
  bol5 = createSprite(width / 2, height * 3 / 8, 50, 50);
  bol6 = createSprite(width / 2, height * 2 / 8, 50, 50);
  bol7 = createSprite(width / 2, height * 1 / 8, 50, 50);
  bol8 = createSprite(width / 2, height * 0 / 8, 50, 50);

  

  bol0.shapeColor = '#FF8000';
}

function draw() {
  background(0);
  drawSprites();
}