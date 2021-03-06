/**
 * renderWorld.js - This file contains the main rendering function and the assignment of the SVGCrayon
 */

const svgAPI = new SVGCrayon('WorldCreated');

/**
 * 
 * @param {*} data - array of xyVal objects, holding the points retreived from the seed
 * @param {*} waterType - int, 0 <= waterType <= 3, holding the type of water level needed for the world
 * @param {*} names - array of strings, giving the names of regions to be placed in the world.
 */
function renderWorld(data, waterType, names) {

    //scale data to the dimensions of the svg canvas
    const xScale = d3.scaleLinear().domain([0, 1]).range([0, svgAPI.width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([svgAPI.height, 0]);
    let points = data.map((d) => {
        return {x: parseFloat(xScale(d.x)), y: parseFloat(yScale(d.y))};
    })

    if (waterType < 2)
    {
        points = points.slice(0, pointCount[0]);
    }
    else if (waterType == 2)
    {
        points = points.slice(0, pointCount[1]);
    }

    //get Legend tag ref
    const legendNames = d3.select('#regionNames');
    legendNames.selectAll("*").remove();

    //initialize voronoi diagram
    const delauney = d3.Delaunay.from(points, d => d.x, d => d.y); 
    const voronoi = delauney.voronoi([0, 0, svgAPI.width, svgAPI.height]);

    //get an iterable of voronoi cells
    const cells = voronoi.cellPolygons();
    let formattedCells = [];

    //reformat output from cellPolygons()
    for(const cell of cells)
    {
        let formattedPolygon = [];
        for(const point of cell)
        {
            let formattedPoint = {x: point[0], y:point[1]};
            formattedPolygon.push(formattedPoint);
        }
        formattedCells.push(formattedPolygon);
    }

    //clean output
    svgAPI.clear();

    //set non-territory color
    if (waterType > 0){
        svgAPI.cover('aqua');
    }
    else{
        svgAPI.cover('#787d79');
    }

    // each iteration places a region based on ./settings.js
    for (var i = 0; i < names.length; i++)
    {
        //find the region's start point
        let start = delauney.find((anchors[names.length - 2][i].x)*svgAPI.width, (anchors[names.length - 2][i].y)*svgAPI.height);

        //find the region's extent (neighbours of neighbours)
        let activeCells = getExtent(start, voronoi);
        
        //find the region's polygon points
        let pointStack = [];
        for (const cell of activeCells)
        {
            let points = formattedCells[cell]
            for (const point of points)
            {
                pointStack.push(point);
            }
        }

        //remove duplicate points
        pointStack = uniquePoints(pointStack);

        //calculate the convex hull
        let hullPath = GrahamScan(pointStack);

        //fill in the area
        svgAPI.path(hullPath, colors[i]);

        //place region name in legend
        const entry = legendNames.append('div')
            .attr('class', 'Entry');

        entry.append('div')
            .attr('class', 'colorSquare')
            .attr('style', `background-color:${colors[i]};`);
        entry.append('div')
            .attr('class', 'Name')
            .text(names[i]);
        
        legendNames.append('br');
    }

    if (waterType == 0) //no water
    {
        //place last line in legend
        const entry = legendNames.append('div')
            .attr('class', 'Entry');

        entry.append('div')
            .attr('class', 'colorSquare')
            .attr('style', `background-color:#787d79;`);
        entry.append('div')
            .attr('class', 'Name')
            .text('Unexplored territory');
        
        legendNames.append('br');
    }
    
}