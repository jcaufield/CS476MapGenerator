//import * as d3 from 'd3';

function ExampleVoronoi(i){
    
    // dimensions of canvas (internal; box size is controlled by MapGen.css)
    const height = 600;
    const width = 600;

    // points -> delauney triangles -> voronoi object
    const points = Array.from({length: 200}, () => [Math.random() * width, Math.random() * height]);

    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0.5, 0.5, width - 0.5, height - 0.5]); // study api, this call is straight from the example page

    // Building the canvas

    var x = document.createElement("canvas");
    var context = x.getContext("2d");

    const path = d3.geoPath(null, context).pointRadius(2.5);

    context.clearRect(0, 0, width, height);

    // render start
    if (i >= 0) {

      context.fillStyle = "#0f0";
      context.beginPath();
      voronoi.renderCell(i, context);
      context.fill();

      //calculate neighbours

      const V = [...voronoi.neighbors(i)];
      const D = [...delaunay.neighbors(i)];
      const U = D.filter(j => !V.includes(j));


      //yellow for delauney neighbours that aren't voronoi neighbours
      context.fillStyle = "#ff0";
      context.beginPath();
      for (const j of U) voronoi.renderCell(j, context);
      context.fill();

      //green for Voronoi neighbours
      context.fillStyle = "#cfc";
      context.beginPath();
      for (const j of V) voronoi.renderCell(j, context);
      context.fill();

      // connects the dots between the chosen point and D neighbours
      context.beginPath();
      for (const j of D) {
        context.moveTo(...points[i]);
        context.lineTo(...points[j]);
      }
      context.strokeStyle = "#000";
      context.stroke();

      context.strokeStyle = "#000";

      context.beginPath();
      voronoi.render(context); //draw Voronoi shapes - would likely omit in project
      voronoi.renderBounds(context); //draws frame
      context.stroke();

      //draws points
      context.fillStyle = "#000";
      context.beginPath();
      path({type: "MultiPoint", coordinates: points});
      context.fill();
    }

  /*context.canvas.ontouchmove = 
  context.canvas.onmousemove = event => {
    render(delaunay.find(event.layerX, event.layerY));
  };*/

  document.body.appendChild(x); // makes the canvas appear
}