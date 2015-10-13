/**
 * Created by session1 on 10/9/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Dogs', 'Cats', 'Birds'],
        ['2011', 35, 400, 200],
        ['2012', 1170, 460, 250],
        ['2013', 660, 1120, 300]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Animals taken into Harbor: 2011-2013',
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: {format: 'decimal'},
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
            options.hAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}
