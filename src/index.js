import { formatPrefix } from 'd3';
import {points, Delaunate} from './delaunay/delaunay';
import { ExampleVoronoi, chart } from './voronoi/voronoiExample';

const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  /*var delaunayObject = Delaunate(points);
  var outputString = 'Points Supplied: [' + points[0] +']';
  

  for (var i = 1; i < points.length; i++)
  {
    outputString += (', [' + points[i] + ']');
  }
  
  outputString += '\nDelaunay Object: ' + delaunayObject.triangles;

  outputString += '\nInterpretation: '

  for (var i = 0; i < delaunayObject.triangles.length; i += 3)
  {
    outputString += '\nTriangle ' + Math.floor(i/3) + ': ';
    outputString += ('[' + points[delaunayObject.triangles[i]] + ']');
    outputString += (', [' + points[delaunayObject.triangles[i+1]] + ']');
    outputString += (', [' + points[delaunayObject.triangles[i+2]] + ']');
  }

  output.innerText = outputString;*/
  ExampleVoronoi(0);
});