function Ball(speeds, d, catImage) {
  this.x = width- d/2;
  this.y = (0.84*d)/2;
  this.xspeed = -1*speeds[0];
  this.yspeed = -1*speeds[0];
  this.speeds = speeds;
  
  
  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    
    if (this.x > width - d){
      this.xspeed = -1* abs(random(speeds));
    }
    if (this.x < 0){
      this.xspeed = abs(random(speeds));
    }
  
    if (this.y > height - (0.84*d)){
      this.yspeed = -1 * abs(random(speeds));
    }
  
    if (this.y < 0) {
      this.yspeed = abs(random(speeds));
    }
    
  }
  
  this.show = function(){
    image(catImage,this.x, this.y);
  }
}