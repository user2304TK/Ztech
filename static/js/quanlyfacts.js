

// vẽ sparklinedash

//total

 var data1 = [];
 for (let i = 0; i < 12; i++) {
    data1.push(randomIntInRange(20, 50));
 }

 var data2 = [];
 for (let i = 0; i < 12; i++) {
    data2.push(randomIntInRange(20, 50));
 }

 var ctx = $('#myChart');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 
                  'Tháng 4', 'Tháng 5', 'Tháng 6',
                  'Tháng 7', 'Tháng 8', 'Tháng 9', 
                  'Tháng 10', 'Tháng 11', 'Tháng 12'],
         datasets: [{
             label: 'Người dùng',
             data: data1,
             backgroundColor: '#39f9b3',
             borderColor: '#39f9b3',
             borderWidth: 1
         },
         {
             label: 'Mod',
             data: data2,
             backgroundColor: '#00beef',
             borderColor: '#00beef',
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         },
         maintainAspectRatio: false
     }
 });

 
 $('#year-chart').on('change', function() {

    var data1 = [];
    for (let i = 0; i < 12; i++) {
       data1.push(randomIntInRange(20, 50));
    }
   
    var data2 = [];
    for (let i = 0; i < 12; i++) {
        data2.push(randomIntInRange(20, 50));
    }

    myChart.data.datasets[0].data = data1;
    myChart.data.datasets[1].data = data2;
    myChart.update();
  });

  