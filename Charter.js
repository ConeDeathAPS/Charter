var Charter = (function() {
	var bar_height_multiplier;
	var bar_width;
	var bcolor;
	var ccolor;
	var lcolor;
	var name;
	var x_text;
	var y_text;
	var bar_label_color;
	var border_color;
	return {
		get_styling: function(properties) {
			bcolor = properties.bar_color;
			ccolor = properties.chart_background;
			lcolor = properties.label_background;
			name = properties.chart_name;
			x_text = properties.x_axis_labels;
			y_text = properties.y_axis_labels;
			bar_label_color = properties.bar_label_color;
			border_color = properties.border_color;
		},
		auto_scaling: function(data, user_height, user_width) {
			var max = data[0];
			// console.log(length);
			for (i = 0; i < data.length; i++) {
				if (data[i] > max) {
					max = data[i];
				}
			}
			//get the bar height multiplier. We will multiply each data value by this multiplier in order to get the height of each bar in pixels
			// console.log(max);
			bar_height_multiplier = ((user_height - 40) / max);
			//this will calculate how wide each bar should be
			bar_width = ((user_width - 40 - (data.length * 2))/data.length);
			var scaling = [bar_height_multiplier, bar_width];
			return scaling;
		},
		draw_chart: function(chartID, data, height, width, x_labels, y_labels) {
			//declare some local variables
			var chart = document.getElementById(chartID);
			var scaling = this.auto_scaling(data, height, width);
			//add a container for holding the bars and separating them from the outside of the container
			chart.innerHTML = "<div id='chart_container' height='" + (height-40) +"' width='" + (width-40) + "' style='margin:5px auto;vertical-align:middle;background-color:" + ccolor + ";border-bottom:2px solid " + border_color + ";border-left:2px solid " + border_color + ";display:inline-block;'></div>";
			//format the styling of the chart main container
			chart.setAttribute("style", "width:" + (width+20) + "px;background-color:" + lcolor + ";display:inline-block;");
			//set the chart_data container we just made to a local variable
			var chart_data = document.getElementById("chart_container");
			//populate the bars
			for (i = 0; i < data.length; i++) {
				var div = document.createElement('div');
				div.setAttribute("id", i);
				div.setAttribute("style", "height:" + (data[i] * scaling[0]) +"px; width:" + scaling[1] + "px; background-color:" + bcolor + ";display:inline-block;vertical-align:bottom;margin:0px 5px;");
				div.innerHTML = "<p class='bar_label' style='text-align:center;color:" + bar_label_color + ";font-family:arial;font-weight:bold;margin-bottom:5px;'>" + data[i] + "</p>";
				chart_data.appendChild(div);
			}
			//begin populating labels if the user specified values for them
			if (x_labels) {
				var x_labels_container = document.createElement("ul");
				x_labels_container.setAttribute("style", "vertical-align:bottom;height:20px;list-style-type:none;margin:0px;padding-left:3px;");
				chart.appendChild(x_labels_container);
				for (i = 0; i < x_labels.length; i++) {
					var label = document.createElement("li");
					console.log(label);
					label.setAttribute("id", "label" + i);
					label.setAttribute("style", "list-style-type:none;display:inline-block;width:" + scaling[1] + "px;margin:0px 5px;text-align:center;");
					label.innerHTML = x_labels[i];
					x_labels_container.appendChild(label);
				}
			}
		}
	}
})();