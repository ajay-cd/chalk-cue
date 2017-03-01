//
// Options and Data definitions
//
declare let d3, nv: any;

export const ChartTypes = [
  'multiBarChart'
];

const color = d3.scale.category20()

export const AllOptions = {
  multiBarChart: {
    chart: {
      type: 'multiBarChart',
      height: 250,
      margin : {
        top: 20,
        right: 20,
        bottom: 45,
        left: 45
      },
      clipEdge: true,
      //staggerLabels: true,
      duration: 500,
      stacked: true,
      xAxis: {
        axisLabel: '',
        showMaxMin: false,
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: '',
        axisLabelDistance: -20,
        tickFormat: function(d){
          return d3.format(',.1f')(d);
        }
      }
    }
  }
}

export const AllData = {
  multiBarChart: generateDataMultiBar()
}

// utils
function sinAndCos() {
  var sin = [],sin2 = [],
    cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}

// MultiBarChart
/* Random Data Generator (took from nvd3.org) */
function generateDataMultiBar() {
  return stream_layers(1,50+Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i,
      values: data
    };
  });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
      y = 2 * Math.random() - .5,
      z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
    var a = [], i;
    for (i = 0; i < m; i++) a[i] = o + o * Math.random();
    for (i = 0; i < 5; i++) bump(a);
    return a.map(stream_index);
  });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}