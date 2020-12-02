/**
 * utilities.js - This file contains helper functions for the rest of the project
 */

 /**
  * cross() - calculates the z-magnitude of the cross product of the 2 vectors described by intersect->a and intersect->b
  * @param {*} a - xyVal object
  * @param {*} b - second xyVal object
  * @param {*} intersect - third xyVal object, representing an intersection of 2 vectors
  */
function cross(a,b,intersect){
    return (a.x-intersect.x)*(b.y-intersect.y)-(a.y-intersect.y)*(b.x-intersect.x);
}

/**
 * uniqueInts() - removes all duplicates from the contents of arr
 * @param {*} arr - array of ints
 */
function uniqueInts(arr) {
    var j = {};
    arr.forEach( function(i) {
        j[`${i}`] = i;
    });

    return Object.keys(j).map(function(i) {
        return j[i];
    });
}

/**
 * uniquePoints() - removes all duplicate points from the contents of arr
 * @param {*} arr - array of xyVal objects
 */
function uniquePoints(arr) {
    var j = {};
    arr.forEach (function(i) {
        j[`${i.x},${i.y}`] = i;
    });

    return Object.keys(j).map(function(i) {
        return j[i];
    });
}

/**
 * getExtent() - finds the neighbors, and neighbors of neighbors of a given Voronoi cell
 * @param {*} start - index of a valid Voronoi cell
 * @param {*} voronoi - d3.Voronoi object
 */
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