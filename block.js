class Block{
    constructor(x, y, width, height, color1) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.color1 = color1;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        rectMode(CENTER);
        fill(this.color1)        
        if(this.body.speed < 3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rect( 0, 0, this.width, this.height);
          pop();
        }
        else{
          push();
          this.visibility = this.visibility-5;
          
          tint(0, 153, 204, this.visibility);
          pop();
          World.remove(world, this.body);
        }
      }
      score(){
        if(this.visibility>0 && this.visibility < 100){
          score++;
        }
      }
}