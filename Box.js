class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':0.2,
      'density':0.02
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(3.5);
    stroke("black")
    //fill(232, 206, 237);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
