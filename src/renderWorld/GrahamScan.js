/**
 * GrahamScan.js - Implements the Graham Scan Algorithm for obtaining the convex hull of a set of points.
 * - http://www.math.ucsd.edu/~ronspubs/72_10_convex_hull.pdf
 */

 function GrahamScan(points) {
//    let points be the list of points
//    let stack = empty_stack()
    let stack = [];
//    find the lowest y-coordinate and leftmost point, called P0
    let lowIndex = 0; 
    for (var i = 1; i < points.length; i++)
    {
        if (points[lowIndex].y < points[i].y)
        {
            lowIndex = i;
        }
        else if (points[lowIndex].y > points[i].y)
        {
            //no action
        }
        else
        {
            if (points[lowIndex].x > points[i].x)
            {
                lowIndex = i;
            }
        }
    }

    //remove P0 from the list of points
    let P0 = points[lowIndex];
    points[lowIndex] = '';
    points = points.filter(point => point != '');


//    sort points by polar angle with P0
    points = points.sort(function(a,b) {
        let crossProd = cross(a,b,P0);
        if (crossProd < 0)
        {
            return 1;
        }
        else if(crossProd > 0)
        {
        //
        }
        return -1;
    })

    points.unshift(P0);


//    for point in points:
    for (const point of points)
    {
//        while count stack > 1 and ccw(next_to_top(stack), top(stack), point) <= 0:
        while (stack.length > 1 && cross(stack[stack.length - 2], stack[stack.length - 1], point) <= 0)
        {
            //pop stack
            stack.pop();
        }
//  push point to stack
        stack.push(point);
    }
    return stack;
}