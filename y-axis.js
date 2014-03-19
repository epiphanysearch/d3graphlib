GraphBase.prototype.yAxis = function(data,label) {

    var graph = this;

    if(typeof(graph.scale) === 'undefined')
        graph.scale = {};

    if(typeof(graph.scale.y) === 'undefined')
        graph.scale.y = [];

    if(typeof(graph.yAxes) === 'undefined')
        graph.yAxes = [];

    legendWidth = 100;
    

    numAxes = graph.scale.y.length;

    if(numAxes > 1) // can only have 2 y axes
        return graph;

    graph.scale.y[numAxes] = d3.scale.linear()
        .range([ graph.oY  , graph.topY])
        .domain([0,d3.max(data)]);

    graph.yAxes[numAxes] = d3.svg.axis()
        .scale(graph.scale.y[numAxes]);

    var translate = "";

    if(numAxes == 0) {
        graph.yAxes[numAxes].orient("left");
        translate = "translate(" + (graph.oX) + ",0)";
        labelTranslate = function(label) { 
            label.attr("transform", "translate(-60,250) rotate(270)");
        };

    } else {
        graph.yAxes[numAxes].orient("right")
        translate = "translate(" + (graph.w - graph.oX - legendWidth) + ",0)";
        labelTranslate = function(label) { 
            label.attr("transform", "translate(60,250) rotate(270)");
        };
    }


    //Create Y axis
    axis = graph.svg.append("g");
    
    var axisLabel = axis.append("g")
        .append("text")
        .text(label)
        .attr("font-family","robotoslablight")
        .attr("font-size","12px")
        .attr("stroke","none")
        .attr("fill","#8C8C8C");



    axis.attr("class", "axis")
        .attr("transform", translate)
        .attr("stroke","#4D4D4D")
        .attr("fill","none")        
        .call(graph.yAxes[numAxes])
            .selectAll("text")  
            .attr("font-family","robotoslablight")
            .attr("font-size","12px")
            .attr("stroke","none")
            .attr("fill","#8C8C8C");

    labelTranslate(axisLabel);


    return graph;
}