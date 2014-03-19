GraphBase.prototype.stackedBarGraph = function(data,yScaleIndex) {
    
    var graph = this;

    var columns = data[0].values.map(function(dat,i) {
        return 'c' + i;
    });

   // var columns = ['c0'];

    var remapped = columns.map(function (dat, i) {
        return data.map(function (d, ii) {
            return {
                x: d.x,
                y: d.y
            };
        })
    });

    
    z = d3.scale.ordinal().range([ "chocolate", "peru","lightsalmon","black","burlywood","slategrey"]);

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
            return  graph.scale.y[yScaleIndex](d.y0 + d.y) + 18;
        })
        .attr("height", function (d) {
            return graph.oY - graph.scale.y[yScaleIndex](d.y) - 20;
        })
        .attr("width", barWidth);

    return graph;
};