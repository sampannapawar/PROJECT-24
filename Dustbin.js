class Dustbin {
    constructor(x,y,width,heigth){
        var options = {
            isStatic : true ,
            'restitution' : 0,
            'friction' : 1,
            'density' : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,heigth,options);
        this.width = width;
        this.height = heigth;
   
        world.add(world,this.body);
    
    display()
        rectmode(CENTER);
        fill(225);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
       }
   }
    

