var measurements = ['BMX160', 'GPSData', 'INA226', 'ModcoData', 'Status', 'WARNING'];

function addLabel(){
    addData(myChart, measurements[0], 'rgb(255, 0, 0)', 'rgb(255, 0, 0)',[10, 40, 25, 30, 60, 20, 0, 15, 30, 5]);
}

setTimeout(function(){
  addData(myChart, measurements[1], 'rgb(0, 0, 0)', 'rgb(0, 0, 0)',[25, 20, 0, 15, 30, 40, 10, 5, 15, 10]);
  myChart.data.datasets[0].hidden = true;
  //myChart.options.plugins.customTitle.text = 'Temp°';
  myChart.update();
},2000);

setTimeout(function(){
  addData(myChart, measurements[2], 'rgb(0, 255, 0)', 'rgb(0, 255, 0)',[50, 45, 23, 17, 32, 0, 2, 19, 12, 40]);
  myChart.data.datasets[1].hidden = true;
  //myChart.options.plugins.customTitle.text = 'Temp°';                                                                    // myChart.options.scales.y.title.text = '1234';
  myChart.update();
},4000);

setTimeout(function(){
  addData(myChart, measurements[3], 'rgb(8, 0, 255)', 'rgb(8, 0, 255)',[60, 12, 34, 9, 28, 6, 1, 10, 23, 54]);
  myChart.data.datasets[2].hidden = true;
  //myChart.options.plugins.customTitle.text = 'Temp°';
  myChart.update();
},6000);

setTimeout(function(){
  addData(myChart, measurements[4], 'rgb(255, 0, 238)', 'rgb(255, 0, 238)',[35, 45, 8, 58, 49, 30, 7, 7, 0, 20]);
  myChart.data.datasets[3].hidden = true;
  //myChart.options.plugins.customTitle.text = 'Temp°';
  myChart.update();
},8000);

setTimeout(function(){
  addData(myChart, measurements[5], 'rgb(255, 221, 0)', 'rgb(255, 221, 0)',[0, 0, 0, 55, 20, 24, 30, 38, 55, 60]);
  myChart.data.datasets[4].hidden = true;
  //myChart.options.plugins.customTitle.text = 'Temp°';
  myChart.update();
},10000);

setTimeout(function(){
  window.location.reload();
},12000);


window.addEventListener('load', addLabel); 