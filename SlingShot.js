class SlingShot 
{
    constructor(bodyA,pointB)
    {
        var options =
        {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.3,
            length:70
        }
        this.pointB = pointB;
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body)
    {
        this.sling.bodyA = body;
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;

            strokeWeight (4);
            stroke ("cyan");
            line (posA.x,posA.y,posB.x,posB.y);
        }
    }
}