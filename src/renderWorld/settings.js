/**
 * settings.js - This file contains settings that guide the renderWorld() function behaviour
 */

//colors in order of inclusion
const colors = ['#fc8d62', '#8da0cb', '#66c2a5', '#e78ac3', '#a6d854', '#1bc0c9'];

// where to look for region start points
const anchors =  
[
    [{x: .38, y: .33}, {x: .62, y: .66}],
    [{x: .2, y: .4}, {x: .65, y: .8}, {x: .5, y: .45}],
    [{x: .28, y: .33}, {x: .23, y: .66}, {x: .48, y: .4}, {x: .8, y: .75}],
    [{x: .5, y: .5}, {x: .75, y: .33},{x: .18, y: .4}, {x: .4, y: .13},{x: .7, y: .75}],
    [{x: .35, y: .5},{x: .55, y: .15},{x: .7, y: .75},{x: .1, y: .25},{x: .1, y: .8},{x: .85, y: .5}]
];

//number of points to take from generated points
const pointCount = [150, 300, 500]; 