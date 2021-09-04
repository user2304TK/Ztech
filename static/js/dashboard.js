

// vẽ sparklinedash

//total

var config = {
  type: 'bar',
  height: '50',
  barWidth: '8',
  resize: true,
  barSpacing: '3', 
  barColor: '#0033cf'
}

var data = [0, 5, 6, 10, 9, 12, 4, 9]
$('#sparklinedash-topic').sparkline(data, config)
 


var config = {
   type: 'bar',
   height: '50',
   barWidth: '8',
   resize: true,
   barSpacing: '3', 
   barColor: '#00beef'
 }
 
 var data = [0, 5, 6, 10, 9, 12, 4, 9]
 $('#sparklinedash-fact').sparkline(data, config)
  


var config = {
   type: 'bar',
   height: '50',
   barWidth: '8',
   resize: true,
   barSpacing: '3', 
   barColor: '#39f9b3'
 }
 
 var data = [0, 5, 6, 10, 9, 12, 4, 9]
 $('#sparklinedash-visit').sparkline(data, config)
  


 
 var ctx = $('#myChart');
 var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 
                  'Tháng 4', 'Tháng 5', 'Tháng 6',
                  'Tháng 7', 'Tháng 8', 'Tháng 9', 
                  'Tháng 10', 'Tháng 11', 'Tháng 12'],
         datasets: [{
             label: 'Thành viên',
             data: [12, 19, 3, 5, 2, 3, 5, 23, 25, 5, 23, 32],
             backgroundColor: '#00beef',
             borderColor: '#00beef',
             borderWidth: 1
         },
         {
             label: 'Khách',
             data: [15, 20, 15, 18, 15, 18, 17, 25, 45, 14, 30, 40],
             backgroundColor: '#39f9b3',
             borderColor: '#39f9b3',
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

 