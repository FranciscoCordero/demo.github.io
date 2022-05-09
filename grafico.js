const customTitle = {
  id: 'customTitle',
  beforeLayout: (chart, args, opts) => {
    const {
      display,
      font
    } = opts;
    if (!display) {
        return;
    }
  
    const {
      ctx
    } = chart;
    ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif'
  
    const {
       width
    } = ctx.measureText(opts.text);
    chart.options.layout.padding.left = width * 1.1;
  },
  afterDraw: (chart, args, opts) => {
    const {
      font,
      text,
      color,
    } = opts;
    const {
      ctx,
      chartArea: {
        top,
        bottom,
        left,
        right
      }
    } = chart;
  
    if (opts.display) {
      ctx.fillStyle = color || Chart.defaults.color
      ctx.font = font || '12px "Helvetica Neue", Helvetica, Arial, sans-serif'
      ctx.fillText(text, 3, top )
    }
  }
}  
  
  
  const config = {  
    type: 'line',
    data: {
        labels: ['11-04-2022','12-04-2022','13-04-2022','14-04-2022','15-04-2022','16-04-2022','17-04-2022','18-04-2022','19-04-2022','20-04-2022',],
        datasets: []
      },
    options: {
      responsive: true,
      layout: {
        padding: {
          top : 20,
          bottom : 20,
          right : 20,
        },
      },
      scales: {
        x :{
          grid: {
            borderColor: '#747272',
            color : '#747272',  
            lineWidth: 2,
          },
          ticks: {
            font: {
              size: 14,
            }
          },
        },
        y :{
          grid: {
            borderColor: '#747272',
            color : '#747272',
            lineWidth: 2,
          },
          ticks: {
            font: {
              size: 14,
            }
          },
          title: {
            align: 'end',
            display: false,
            text: 'ads',
          }
        }
      },
      fill: false,
      plugins: {
        customTitle: {            // Titulo eje y
          display: true,
          text: '',
          color: '',
        },
        legend:{
          display: true,
        },
        title: {
          display: true,
          text: 'Control Sat',
            font:{
              size: 16,
              family: 'Arial',
            },
        },
        subtitle:{
          display: true,
          text: 'Click to show',
        },
      }
    },
    plugins: [customTitle]
  };
  
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(document.getElementById('myChart'),config);
  
  /* function to push datasets to the chart */     
  function addData(myChart, label, color, color, data){        
    myChart.data.datasets.push({
      label: label,
      backgroundColor: color,                                    
      borderColor: color,
      data: data,
      hidden: false,
    });
    myChart.update();
  }
  
  
  