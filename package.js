class package{
    constructor(x,y,width,height){
    var options = {
          'restituition' :0.8,
          'friction' :1.0,
          'density' :1.0
    }
    this.body = Bodies.package(x,y,width,height,options);
    this.width = weight;
    this.height = height;
    this.image = loadImage("sprites/helicopter.png");
    World.add(world,this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    image(this.image,0,0,this.width,this.height);
  }
}
