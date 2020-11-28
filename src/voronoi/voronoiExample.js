function voronoiExample() {

  // generate random data for 500 points
  const data = d3.range(500).map((d, i) => ({
  x: Math.random(),
  y: Math.random(),
  id: i,
  label: `Point ${i}`}));


// *** BOILER PLATE START ***

// inner chart dimensions, where the dots are plotted
const plotAreaWidth = 780;
const plotAreaHeight = 600;

// radius of points in the scatterplot
const pointRadius = 3;

// initialize scales
const xScale = d3.scaleLinear().domain([0, 1]).range([0, plotAreaWidth]);
const yScale = d3.scaleLinear().domain([0, 1]).range([plotAreaHeight, 0]);
const colorScale = d3.scaleLinear().domain([0, 1]).range(['#06a', '#0bb']);

// select and clear the root container where the chart will be added

let containerRef = document.getElementById('WorldCreated');
containerRef.innerHTML = "";

// initialize main SVG
const svg = d3.select('#WorldCreated');
// the main g where all the chart content goes inside
const g = svg.append('g');

//BOILER PLATE END

// draws points
/*const circles = g.append('g').attr('class', 'circles');

const binding = circles.selectAll('.data-point').data(data, d => d.id);

binding.enter().append('circle')
  .classed('data-point', true)
  .attr('r', pointRadius)
  .attr('cx', d => xScale(d.x))
  .attr('cy', d => yScale(d.y))
  .attr('fill', d => colorScale(d.y));
  */

// draw delauney diagram
const delauney = d3.Delaunay.from(data, d => xScale(d.x), d => yScale(d.y)); // .from(points, fx, fy)
const voronoi = delauney.voronoi([0, 0, plotAreaWidth, plotAreaHeight]); // .voronoi([xmin, ymin, xmax, ymax])

//console.log(voronoi.render()); // the path string attached to the d attribute below

g.append('path')
.attr('d', delauney.renderPoints(null, 1))
.attr('stroke', 'green');

// build the path tag for the voronoi cells
g.append('path')
.attr('d', voronoi.render())
.attr('stroke-width', 1)
.attr('stroke', 'red');

//coloring cell closest to center
let midIndex = delauney.find(plotAreaWidth/2, plotAreaHeight/2);
g.append('path')
.attr('d', voronoi.renderCell(midIndex))
.attr('stroke', 'purple')
.attr('fill', 'blue');

//SIMPLE CIRCLE EXAMPLE
g.append('circle')
.attr('cx', xScale(data[midIndex].x))
.attr('cy', yScale(data[midIndex].y))
.attr('r', 3)
.attr('stroke', 'black');

// coloring arbitrary cell & corresponding input dot: 5
g.append('path')
.attr('d', voronoi.renderCell(5))
.attr('stroke', 'blue')
.attr('fill', 'red');

//console.log('M' + xScale(data[5].x) + ',' + yScale(data[5].y));
g.append('circle')
.attr('cx', xScale(data[5].x))
.attr('cy', yScale(data[5].y))
.attr('r', 3)
.attr('stroke', 'black');

//coloring neighbours and superneighbours for cell 5
let neighbors = voronoi.neighbors(5);
let neighborhood = []; 
for (const i of neighbors)
  {
    let newNeighbors = voronoi.neighbors(i);
    for (const j of newNeighbors)
    {
      neighborhood.push(j);
    }
  }

// console.log('neighborhood: ', neighborhood); // examine this, you see i'm just working with cell indeces here

for (const k of neighborhood)
{
  g.append('path')
  .attr('d', voronoi.renderCell(k))
  .attr('stroke', 'blue')
  .attr('fill', 'orange');

  g.append('circle')
  .attr('cx', xScale(data[k].x))
  .attr('cy', yScale(data[k].y))
  .attr('r', 1)
  .attr('stroke', 'black');
}

// coloring arbitrary cell & corresponding input dot: 5, again, so it shows up
g.append('path')
.attr('d', voronoi.renderCell(5))
.attr('stroke', 'blue')
.attr('fill', 'red');

}