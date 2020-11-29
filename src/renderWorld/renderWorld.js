
function renderWorld(data, waterType, names) {

    //prep data
    const xScale = d3.scaleLinear().domain([0, 1]).range([0, svgAPI.width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([svgAPI.height, 0]);
    const points = data.map((d) => {
        return {x: parseFloat(xScale(d.x)), y: parseFloat(yScale(d.y))};
    })

    //get Legend Ref
    const legendNames = d3.select('#regionNames');
    legendNames.selectAll("*").remove();

    //initialize voronoi diagram
    const delauney = d3.Delaunay.from(points, d => d.x, d => d.y); // .from(points, fx, fy)
    const voronoi = delauney.voronoi([0, 0, svgAPI.width, svgAPI.height]); // .voronoi([xmin, ymin, xmax, ymax])
    const cells = voronoi.cellPolygons();
    let formattedCells = [];

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

    //set un-affiliated territory color
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

        //place name in legend
        const entry = legendNames.append('div')
            .attr('class', 'Entry');

        entry.append('div')
            .attr('class', 'colorSquare');
        entry.append('div')
            .attr('class', 'Name')
            .text(names[i]);
        
        legendNames.append('br');
    }
    
}