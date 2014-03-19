GraphBase.prototype.legend = function(data) {
    
    var graph = this;

    var legend = graph.svg.append("g")
        .attr("class", "legend")
        .attr("height", 100)
        .attr("width", 300)
        .attr('transform', 'translate(-100,50)');

    legend.selectAll('rect')
        .data(data)
        .enter()
        .append("rect")
            .attr("x", graph.w - 65)
            .attr("y", function(d, i){ return i *  20;})
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function(d) { 
                var color = graph.palette[data.indexOf(d)];
                return color;
            })

    legend.selectAll('text')
        .data(data)
        .enter()
        .append("text")
            .attr("x", graph.w - 52)
            .attr("y", function(d, i){ return i *  20 + 9;})
            .attr("font-family","robotoslablight")
            .attr("font-size","12px")
            .attr("stroke","none")
            .attr("fill","#8C8C8C")
            .text(function(d) {
                return d;
            }); 

    graph.legend = legend;   

    return graph;
};
