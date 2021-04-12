class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<4){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          this.visibility = this.visibility - 5;
          push();
          tint(255,this.visibility); 
          image(this.image, this.body.position.x, this.body.position.y, 50 ,50);
          pop();
        }
      }
}
