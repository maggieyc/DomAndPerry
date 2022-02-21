

function Timer(time){
  
  this.time = time;
  
  this.show = function(){
    textAlign(CENTER, CENTER);
    textSize(50);
    text(this.time, width/2, height/2);
  }
  
  this.update = function(){
    if (frameCount % 60 == 0 && this.time > 0){
      this.time --;
    }
    
    if(this.time == 0){
      this.time = "YOU WIN!";
      b.xspeed = 0;
      b.yspeed = 0;
      
    }
  }
  
}