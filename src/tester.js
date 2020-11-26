//const d3 = require('d3');

const worldButton = document.getElementById("world-button");
const worldOutput = document.getElementById("world-output");

worldButton.addEventListener("click", () => {
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
  /*const height = 600;
  const width = 600;
  const points = Array.from({length: 200}, () => [Math.random() * width, Math.random() * height]);
  ExampleVoronoi(0, points);
  ExampleVoronoi(12, points); */

  voronoiExample();
});