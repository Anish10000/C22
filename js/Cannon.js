class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannonImg = loadImage("assets/canon.png");
    this.canBImg = loadImage("assets/cannonBase.png")
    
  }
  
  display(){
    push();
    imageMode(CENTER);
    //rect(this.x, this.y, this.width, this.height);
    image(this.cannonImg,this.x, this.y, this.width, this.height);
    pop();
    noFill();

    //rect(70,20,200,200);
    image(this.canBImg,70,20,200,200)

  }
  


}
