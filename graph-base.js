var GraphBase = function(container, config) {
    
    this.w = config.w || 660;
    this.h = config.h || 500;

    ctr = $(container);

    this.palette = [ "#F89728", "#000000", "#B2B2B2", "#F4CC95","#CCCBCB", "#FAF0CA", "#F5E6D4","#F3B059","#F2F1F1"];
    this.paletteIndex = 0;

    this.oX = config.oX || 40;
    this.oY = this.h - (config.oY || 150 );  

    this.topY = config.topY || 50;

 
    // create canvas
    this.svg = d3.select(container).append("svg:svg")
        .attr("class", "chart")
        .attr("width", this.w)
        .attr("height", this.h);

           
    return this;
}