GraphBase.prototype.lineGraph = function(data,yScaleIndex) {
    
    var graph = this;

    if(typeof(graph.paletteIndex) === 'undefined')
        graph.paletteIndex = 0;
    
    colour = graph.palette[graph.paletteIndex++];

    var pointX = function(d, i) { return graph.scale.x(d.x) + (graph.scale.x.rangeBand() * 0.5);  }
    var pointY = function(d) { return graph.scale.y[yScaleIndex](d.y); }


    var line = d3.svg.line()
        .x(pointX)
        .y(pointY);

    var lineGraph = graph.svg.selectAll("g.lineGraph")
        .data(data)
        .enter().append("svg:g");

    lineGraph.append("svg:path")
        .attr("d", line(data))
        .style("fill","none")
        .style("stroke", colour)
        .style("stroke-linecap", "round")
        .style("stroke-width", "3px");

    return graph;
};

GraphBase.prototype.lineGraphPoints = function(data,yScaleIndex) {
    
    var graph = this;
    
    colour = graph.palette[graph.paletteIndex++];

    var pointX = function(d, i) { return graph.scale.x(d.x) + (graph.scale.x.rangeBand() * 0.5);  }
    var pointY = function(d) { return graph.scale.y[yScaleIndex](d.y); }

    var line = d3.svg.line()
        .x(pointX)
        .y(pointY);

    var lineGraph = graph.svg.selectAll("g.lineGraph")
        .data(data)
        .enter().append("svg:g");

    lineGraph.append("svg:path")
        .attr("d", line(data))
        .style("fill","none")
        .style("stroke", colour)
        .style("stroke-linecap", "round")
        .style("stroke-width", "3px");


    var node = lineGraph.selectAll("g")
        .data(data)
        .enter()
        .append("g");

    node.append("svg:circle")
        .attr("stroke", "black")
        .attr("fill", function(d, i) { return "black" })
        .attr("cx", pointX)
        .attr("cy", pointY)
        .attr("r", function(d, i) { return 3 });

    node.append("text")
        .attr("x", pointX)
        .attr("y", pointY)
        .attr("font-family","robotoregular")
        .text(function(d) { return d.y; });

    return graph;
};