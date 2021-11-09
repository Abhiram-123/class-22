class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cimg = loadImage("assets/canon.png");
    this.bimg = loadImage("assets/cannonBase.png")
  }
  Display(){
  push();
  imageMode(CENTER);
  image(this.cimg,this.x,this.y,this.width,this.height);
  pop();
  
  push()
  imageMode(CENTER);
  image(this.bimg,170,120,200,200);
  pop()
  }

}
