class Polygon {
    constructor(x, y,sides,radius,colour) {
      var options = {
        
        'restitution':0.8,
        'friction':3,
        'density':0.1,
        'mass':5
          
      }
      this.body = Bodies.polygon(x, y, sides,radius, options,colour);
      this.sides=sides;
      this.radius=radius;
      this.image=loadImage("hexagon.png")
      
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      imageMode(CENTER);
      image(this.image,0, 0,40,40);
      pop();
    }
  };
  