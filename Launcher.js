class launcher
{
    constructor (bodyA, pointB)
    {
     var options ={
         bodyA  : bodyA,
         pointB : pointB,
         stiffness : 0.004,
         length : 14,
     }

     this.pointB = pointB;
     this.Olauncher = Constraint.create(options);
     World.add(world,this.Olauncher);
    
    }

    
    attach(body)
    {
      this.Olauncher.bodyA = body;
    }

    fly()
    {
        this.Olauncher.bodyA = null;
    }

    display()
    {
        if (this.Olauncher.bodyA)
        {
            var pointA = this.Olauncher.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke(0,0,0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();

        }
    }
}