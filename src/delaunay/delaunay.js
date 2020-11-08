//import Delaunator from 'delaunator';

const points = [[10,15], [23,15], [40,49], [64,25], [25,30], [14,22], [0,0], [64,0], [0,64], [64,64]];

function Delaunate(points) {
    const delaunay = Delaunator.from(points); //Constructor
    //console.log(delaunay.triangles);
    return delaunay;
}