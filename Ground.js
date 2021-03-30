class ground {
 constructor(x,y,width,heigth){
     var options = {
         isStatic : true ,
         'restitution' : 0,
         'friction' : 0,
         'density' : 1
     }
     this.body = Bodies.rectangle(x,y,width,heigth,options);
     this.width = width;
     this.height = heigth;

     world.add(world,this.body);
 
 display()
     rectmode(CENTER);
     Fill(225);
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}