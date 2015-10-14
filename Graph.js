/**
 * Created by session1 on 10/9/15.
 */
<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
    google.load("visualization", "1.1", {packages:["bar"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Dogs', 'Cats', 'Birds'],
        ['2011', 133, 56, 6],
        ['2012', 2, 0, 0],
        ['2013', 6, 11, 0]
    ]);

    var options = {
        chart: {
            title: 'Harbor Shelter',
            subtitle: 'Animals taken into Harbor: 2011-2013',
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, options);
}
</script>
</head>
<body>
<div id="barchart_material" style="width: 900px; height: 500px;"></div>
    </body>



    </html>
