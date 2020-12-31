class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1
        }
        this.radius = radius;
        this.x = x
        this.y = y
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(image,0,0);
        fill(248, 24, 148);
        
        pop()
    }

    
}