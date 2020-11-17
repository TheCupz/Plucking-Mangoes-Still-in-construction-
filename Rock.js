class Rock {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': true,
          'restitution':0,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill(122);
      //rect(0, 0, this.width, this.height);
      image(this.image, -25, -50, this.width, this.height);
      pop();
    }
  };
  