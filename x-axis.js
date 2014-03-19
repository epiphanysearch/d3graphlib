GraphBase.prototype.xAxis = function(data) {

    var graph = this;

    if(typeof(graph.scale) === 'undefined')
        graph.scale = {};

    legendWidth = 100;
   
    graph.scale.x = d3.scale.ordinal()
        .rangeRoundBands([graph.oX, (graph.w - graph.oX - legendWidth)])
        .domain(data);
        
   
    graph.xAxis = d3.svg.axis()
        .scale(graph.scale.x)
        .orient("bottom");

    graph.svg.append("g")
        .attr("class", "axis")
        .attr("stroke","#4D4D4D")
        .attr("fill","none")
        .attr("transform", "translate(0," + graph.oY + ")")
        .call(graph.xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("font-family","robotoslablight")
            .attr("stroke","none")
            .attr("fill","#8C8C8C")
            .attr("font-size","12px")
            .attr("transform", function(d) {
                 return "rotate(-90) translate(-10,-10)" 
            });

    return graph;
}