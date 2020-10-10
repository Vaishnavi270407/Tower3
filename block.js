class Block{
    constructor(x, y, width, height, color1) {
        var options = {
            'restitution':0.5,
            'friction':1.5,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color1 = color1;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill(this.color1)
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}