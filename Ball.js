class Ball {
    constructor(x,y,radius){
        var ball_options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 2   
        } 
    this.radius=radius    
    this.body=Bodies.circle(x, y, this.radius/2, ball_options)
    World.add(world,this.body);
    }
    display(){
    push ();
    translate(this.body.position.x,this.body.position.y)    
    fill("red");
    circle (0,0,this.radius)
    pop ();
    }
}