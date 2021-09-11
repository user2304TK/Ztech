
 var data1 = [];
 for (let i = 0; i < 12; i++) {
    data1.push(randomIntInRange(20, 50));
 }

 var ctx = $('#myChart');
 var myChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 
                  'Tháng 4', 'Tháng 5', 'Tháng 6',
                  'Tháng 7', 'Tháng 8', 'Tháng 9', 
                  'Tháng 10', 'Tháng 11', 'Tháng 12'],
         datasets: [
         {
             label: 'Người dùng',
             data: data1,
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
  
    myChart.data.datasets[0].data = data1;
    myChart.update();
  });

  
$(document).ready(function(){
    $("#tenBaiViet").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#dsBaiViet h4").filter(function() {
        $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

$(".btnDel").click(function(e) {
    $(this).parent().parent().parent().parent().parent().parent().remove();
    e.preventDefault();
 });

 $("#themMuc").click(function(e) {
  if($("#tenMuc").val().trim() == "") return;
  html = '<tr><td>' + $("#tenMuc").val() + '</td><td>0</td><td class="text-right"><a class="bi bi-trash-fill px-2 admin-btn-round-clickdg"></a></td></tr>'
  $("#dsMuc").append(html);
  $("#filterMuc").append('<option>' + $("#tenMuc").val() + '</option>');
  $("#dsMuc a").click(function(e) {
    $(this).parent().parent().remove();
    e.preventDefault();
  });
});

$("#dsMuc a").click(function(e) {
  $(this).parent().parent().remove();
  e.preventDefault();
});


var a = $('#chartMuc');
var config = {
  type: 'pie',
  data: {
    labels: ['IOS', 'Android', 'Windows'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [6969, 696, 69],
        backgroundColor: ['#ff7f7f', '#39f9b3', '#00beef'],
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  },
};
var chartMuc = new Chart(a, config);