var rect = {
    parameter:(x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if(l<0||b<0){
        console.log("Rectangle dimensions should be greater than zero:  l = "
        + l + ",  and b = " + b);
    }

    else{
        console.log("The Parameter of the Rectangle is:"+rect.parameter(l,b));
        console.log("The Area of the Rectangle is:"+rect.area(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);