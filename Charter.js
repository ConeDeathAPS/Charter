var Charter = (function() {
	var bar_height_multiplier;
	var bar_width;
	var bcolor;
	var ccolor;
	var lcolor;
	var name;
	var x_text;
	var y_text;
	return {
		get_styling: function(properties) {
			bcolor = properties.bar_color;
			ccolor = properties.chart_background;
			lcolor = properties.label_background;
			name = properties.chart_name;
			x_text = properties.x_axis_labels;
			y_text = properties.y_axis_labels;
		},
		auto_scaling: function(data, user_height, user_width) {
			var max = 0;
			var length = data.length;
			for (each in data) {
				if (each < max) {
					max = each;
				}
			}
			//get the bar height multiplier. We will multiply each data value by this multiplier in order to get the height of each bar in pixels
			bar_height_multiplier = ((user_height - 40) / max);
			//this will calculate how wide each bar should be
			bar_width = ((user_width - 40 - (length * 2))/length);
			return [bar_height_multiplier, bar_width];
		},
		draw_chart: function(chartID, data, scaler) {
			var chart = document.getElementById(chartID);
			console.log(chartID);
			//add a container for holding the bars and separating them from the outside of the container
			chart.append("<div id='chart_container' height='" + (user_height-40) +"' width='" + (user_width-40) + "' style=margin:10pxauto;vertical-align:middle;background-color:" + lcolor + ";border-bottom:2pxsolidblack;border-left:2pxsolidblack;></div>")
			//format the styling of the chart main container
			chart.attr("style", "background-color:" + ccolor + ";");
			//set the chart_data container we just made to a local variable
			var chart_data = document.getElementById("chart_container");
			//populate the bars
			for (each in data) {
				chart_data.append("<div class='bar' style='height:" + (each * bar_height_multiplier) +"; width:" + bar_width + "; background-color:" + bcolor + ";'><p class='bar_label'>" + each + "</p></div>");
			}
		}


	}
	
})();