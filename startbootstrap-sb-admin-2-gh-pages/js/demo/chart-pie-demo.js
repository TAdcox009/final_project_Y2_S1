// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["HTML5", "CSS3", "JavaScript", "Node", "SCSS", "Bootstrap", "Version Control"],
    datasets: [{
      data: [25, 25, 15, 11, 8, 6, 10],
      backgroundColor: ['#fc4103', '#5000b3', '#f5ec78', '#0b9913', '#db53a3', '#f7ac43', '#4f4e4c'],
      hoverBackgroundColor: ['#fc4103', '#5000b3', '#f5ec78', '#0b9913', '#db53a3', '#f7ac43', '#4f4e4c'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
