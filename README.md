D3 Graphlib
===========

Some helpers for building graphs using d3js (http://d3js.org)

Basic usage
-----------

- GraphBase - create a basic graph canvas inside the supplied element:

	var graph = new GraphBase('.js-graph-area',{'w': 800, 'h': 700, 'oX': 100, 'oY': 300, 'topY': 50});

- GraphBase.xAxis(data) - add an xAxis using the supplied array for axis labels

	graph.xAxis(['things','doohickeys','widgets']);

- GraphBase.yAxis(data,label) - add a yAxis (up to 2 may be added) using the supplied array for series values (the scale will be determined based on the maximum and minumum values in the data set)


	graph.yAxis([100,354,756]),'Item sales');
	graph.yAxis([14300,457354,56756]),'£');

- GraphBase.legend(data) - add a legend indicating the colours of the series

	graph.legend(['Item sales','Sales value']);

- GraphBase.barGraph(data, yScaleIndex) - add a bar graph using the supplied data against the indicated scale (0 = yAxis1, 1 = yAxis2)

Data is expected as an array of points: [{x:xVal, y:yVal, z:zVal}] where xVal is a value on the x-axis, yVal the series value and zValue the index for a stacked bar (not used for anything else)

The following simple function can be used to produce an array of points from source data:

	var getData = function(data,xValues) {
                var gData = [];
                for(i=0;i<data.length;i++) {
                        gData[i] = { x: xValues[i], y: data[i], z:0 };
                }
                return gData;
        }


	graph.barGraph(getData([100,354,756],['things','doohickeys','widgets']),'Item sales');
	graph.barGraph(getData([14300,457354,56756],['things','doohickeys','widgets']),'£');


- GraphBase.lineGraph(data, yScaleIndex) - add a line graph using the supplied data against the indicated scale (0 = yAxis1, 1 = yAxis2)

	graph.lineGraph(getData([100,354,756],['things','doohickeys','widgets']),'Item sales');
	graph.lineGraph(getData([14300,457354,56756],['things','doohickeys','widgets']),'£');


See demo.html for a working example
