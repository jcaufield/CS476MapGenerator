/**
 * SVGAdapter.js
 * -------------
 * Adapter Class that handles drawing on an SVG with d3 methods.
 */

class SVGAdapter {
    constructor (svgid) {
        this.svg = d3.select(`#${svgid}`);
        this.g = this.svg.append('g');
        
        let svgTemp = document.getElementById(svgid);
        this.height = svgTemp.getAttribute('height');
        this.width = svgTemp.getAttribute('width');
    }

    cover (color){

        let pathString = `M0,0L0,${this.height}L${this.width},${this.height}L${this.width},0Z`;

        this.g.append('path')
            .attr('d', pathString)
            .attr('fill', color);
    }

    path (points, color){
        if(points.length < 3)
        {
            return;
        }

        let pathString = `M${points[0].x},${points[0].y}`;

        for (var i = 1; i < points.length; i++)
        {
            pathString += `L${points[i].x},${points[i].y}`;
        }
        pathString += 'Z';

        this.g.append('path')
            .attr('d', pathString)
            .attr('stroke', 'black')
            .attr('stroke-width', 3)
            .attr('fill', color);
    }
    
    pointText (point, text){
        this.g.append('circle')
            .attr('cx', point.x)
            .attr('cy', point.y)
            .attr('r', 3);

        this.g.append('text')
            .attr('x', point.x - 5)
            .attr('y', point.y - 8)
            .text(text);
    }

    text (point, text){
        this.g.append('text')
        .attr('x', point.x)
        .attr('y', point.y)
        .text(text);
    }

    clear(){
        this.g.selectAll("*").remove();
    }
}