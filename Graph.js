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
            subtitle: 'Animals taken into Harbor: 2011-2013'
        },
        bars: 'horizontal' // Required for Material Bar Charts.
    };
    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, options);
}