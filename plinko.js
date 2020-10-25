class plinko{
    constructor(x, y, radius){
        var options ={
            'restitution': 1,
        }
        this.body = Bodies.circle(this.x, this.y, 10, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        pop();
    }
}