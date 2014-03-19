GraphBase.prototype.barGraph = function(data,yScaleIndex) {
    
    var graph = this;

    // get a list of the unique set of columns
    var columns = $.map(data, function(d) { return d.z})
        .filter(function(itm,i,columns) { return i==columns.indexOf(itm); });

    // get the colours
    colours = [];
    for(i=0;i<columns.length;i++)
        colours[i] = graph.palette[graph.paletteIndex++];

    z = d3.scale.ordinal().range(colours);

    // remap the data
    var remapped = columns.map(function(col,i){
        return $.grep(data,function(d) { return (d.z==col); });
    });

    var stacked = d3.layout.stack()(remapped)


    // Add a group for each column.
    var valgroup = graph.svg.selectAll("g.valgroup")
        .data(stacked)
        .enter().append("svg:g")
        .attr("class", "valgroup")
        .style("fill", function (d, i) {
            return z(i);
        })
        .style("stroke", function (d, i) {
            return d3.rgb(z(i)).darker();
        });

    
    // Add a rect for each date.
    var barWidth = graph.scale.x.rangeBand() * 0.5;

    var rect = valgroup.selectAll("rect")
        .data(function (d) {
            return d;
        })
        .enter().append("svg:rect")
        .attr("x", function (d) {
            return graph.scale.x(d.x) + (barWidth / 2) ;
        })
        .attr("y", function (d) {                        
            return  graph.scale.y[yScaleIndex](d.y0 + d.y);
        })
        .attr("height", function (d) {
            return graph.oY - graph.scale.y[yScaleIndex](d.y);
        })
        .attr("width", barWidth);


    return graph;
};
