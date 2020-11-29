
function renderWorld(data, waterType, names) {

    //prep data
    const xScale = d3.scaleLinear().domain([0, 1]).range([0, svgAPI.width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([svgAPI.height, 0]);
    const points = data.map((d) => {
        return {x: parseFloat(xScale(d.x)), y: parseFloat(yScale(d.y))};
    })

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
        let start = delauney.find((anchors[i].x)*svgAPI.width, (anchors[i].y)*svgAPI.height);

        //find the region's extent (neighbours of neighbours)
        let activeCells = getExtent(start, voronoi);
        
        //find the regions's 
        let pointStack = [];
        for (const cell of activeCells)
        {
            let points = formattedCells[cell]
            for (const point of points)
            {
                pointStack.push(point);
            }
        }

        for (const point of pointStack)
        {
            svgAPI.pointText(point, '');
        }

        //place name
        svgAPI.text(points[start], names[i]);
    }

    
}