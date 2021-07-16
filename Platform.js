// Creating platform class, objects will be created according to posX.

class Platform {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = random([280,160]);
      this.rx = posX;
      this.ry = height;  
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="green";
      this.debug=true;
    }
  
  
  }
  
  