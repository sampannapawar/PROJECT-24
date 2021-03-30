class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic : true ,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
   
        world.add(world,this.body);
    
    display()
        ellipsmode(RADIUS);
        Fill("green");
        rect(this.body.position.x,this.body.position.y,this.radius);
       }
   }