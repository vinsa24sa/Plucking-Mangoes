class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.Throw = Constraint.create(options);
        World.add(world, this.Throw);
    }

    fly(){
        this.Throw.bodyA = null;
    }

    attach(bodyA){
       this.Throw.bodyA = bodyA;
    }

    display(){
        if(this.Throw.bodyA){
        var pointA = this.Throw.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}