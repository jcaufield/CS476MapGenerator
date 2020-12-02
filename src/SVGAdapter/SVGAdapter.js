/**
 * SVGAdapter.js - Adapter Class that handles drawing on an SVG with d3 methods.
 */


class SVGAdapter {
    constructor (svgid) {
        //object fields
        this.svg = d3.select(`#${svgid}`);
        this.g = this.svg.append('g');
        
        let svgTemp = document.getElementById(svgid);
        this.height = svgTemp.getAttribute('height');
        this.width = svgTemp.getAttribute('width');
    }

    /**
     * cover() - covers the svg tag in the supplied color
     * @param {*} color - color string 
     */
    cover (color){

        let pathString = `M0,0L0,${this.height}L${this.width},${this.height}L${this.width},0Z`;

        this.g.append('path')
            .attr('d', pathString)
            .attr('fill', color);
    }

    /**
     * path() - draws a cyclical svg path with the given points, filling the circumscribed area with the color
     * @param {*} points - array of xyVal objects denoting the path
     * @param {*} color - color string
     */
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
    

    /**
     * pointText() - draws a labelled point in the svg tag
     * @param {*} point - xyVal object
     * @param {*} text - text for label
     */
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

    /**
     * text() - places texts in the svg tag
     * @param {*} point 
     * @param {*} text 
     */
    text (point, text){

        let chars = text.length;

        this.g.append('text')
        .attr('x', point.x - (3*chars))
        .attr('y', point.y)
        .text(text);
    }

    /**
     * clear() - empties the svg tag
     */
    clear(){
        this.g.selectAll("*").remove();
    }
}