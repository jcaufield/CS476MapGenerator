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
    
}