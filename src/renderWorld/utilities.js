function cross(a,b,intersect){
    return (a.x-intersect.x)*(b.y-intersect.y)-(a.y-intersect.y)*(b.x-intersect.x);
}

function uniqueInts(arr) {
    var j = {};
    arr.forEach( function(i) {
        j[`${i}`] = i;
    });

    return Object.keys(j).map(function(i) {
        return j[i];
    });
}

function uniquePoints(arr) {
    var j = {};
    arr.forEach (function(i) {
        j[`${i.x},${i.y}`] = i;
    });

    return Object.keys(j).map(function(i) {
        return j[i];
    });
}

function getExtent (start, voronoi) {
    let neighbors = voronoi.neighbors(start);
    let neighborhood = []; 
    for (const i of neighbors)
      {
        let newNeighbors = voronoi.neighbors(i);
        for (const j of newNeighbors)
        {
          neighborhood.push(j);
        }
      }
    
    return uniqueInts(neighborhood);
}