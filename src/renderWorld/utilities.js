function cross(x1,y1,x2,y2){
    return x1*y2 - x2*y1;
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