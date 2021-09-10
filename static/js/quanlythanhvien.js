


// vẽ sparklinedash

//total


var a = $('#chartMem');
var config = {
  type: 'pie',
  data: {
    labels: ['Thành viên thường', 'Mod'],
    datasets: [
      {
        data: [96, 69],
        backgroundColor: ['#39f9b3', '#00beef'],
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