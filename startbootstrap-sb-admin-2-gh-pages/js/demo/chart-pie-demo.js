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
      data: [90, 90, 60, 30, 30, 30, 50],
      backgroundColor: ['#eb6142', '#845db3', '#f5ec78', '#3ca241', '#e35eab', '#f7af4a', '#595855'],
      hoverBackgroundColor: ['#eb6142', '#845db3', '#f5ec78', '#3ca241', '#e35eab', '#f7af4a', '#595855'],
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
