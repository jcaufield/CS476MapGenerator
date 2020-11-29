
function renderWorld(data, waterType, names) {

    //prep data
    const xScale = d3.scaleLinear().domain([0, 1]).range([0, svgAPI.width]);
    const yScale = d3.scaleLinear().domain([0, 1]).range([svgAPI.height, 0]);
    const points = data.map((d) => {
        return {x: parseFloat(xScale(d.x)), y: parseFloat(yScale(d.y))};
    })

    
    svgAPI.clear();

    if ( waterType > 0){
        svgAPI.cover('aqua');
    }
    else{
        svgAPI.cover('#787d79');
    }

    points.forEach(point => {
        svgAPI.pointText(point, '');
    });


    
}