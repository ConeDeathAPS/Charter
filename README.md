#Charter
###A simple, bare-bones javascript graphing library requiring minimal setup and no additional libraries

##Setup
Setup is super easy:
+ An array containing some data. Don't worry if the data are stored as strings, they will be converted to numbers within Charter. You can name it whatever you want, you will just pass it into the drawing function.
	- ex. `var data = [1, 3, 7, 2, "5", 10, "200"];`
+ You'll want to copy and fill out the initialization object. It looks like this:
```    javascript
	Charter.get_styling({
        bar_color: "rgba(255, 0, 0, .6)",
        chart_background: "#3c3c3c",
        label_background: "grey",
        label_color: "white",
        header_color: "white",
        chart_name: "My Graph",
        x_axis_labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"],
        y_axis_labels: [],
        bar_label_color: "white",
        border_color: "black",
        bar_easing: "easeOutBounce"
    });
```
+ Enter colors the same way you would in CSS, just within quotes.
+ The y-axis labels are not yet configured. That is coming later. You also do not need to specify x-axis labels if you do not wish.
+ Finally, lets graw the graph! You'll need a div with a unique ID. You will pass this, along with your data array and desired width and height (in pixels) into the draw_graph function within Charter. It should look like this:
``` javascript
 Charter.draw_chart("myGraph", data, height, width);
```
###UPDATE 11/5/2015
+ Easing! Make sure that if you want access to anything other than the standard swing and linear easing you'll need to include jquery UI's easing functions BEFORE you include charter. Also keep in mind that if you have anything else on your page with an ID of "bar" followed by a number, it will apply easing and height to that bar too :-P.
+ There are a couple more colors you can specify now. If you are looking for a transparent background, it seems that using rgba color values won't work, you'll need to just specify "none".

--Andrew
