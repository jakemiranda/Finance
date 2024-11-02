/**
 * For usage, visit Chart.js docs https://www.chartjs.org/docs/latest/
 */
const barConfig = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October', 'November','December'],

    datasets: [
      {
        label: 'Tumbler',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [43, 48, 40, 54, 67, 73, 70, 80, 90, 100, 110, 120],
      },
      {
        label: 'Gift Box',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [24, 50, 64, 74, 52, 51, 65, 43, 48, 70, 98, 102,],
      },
      {
        label: 'Ballpen',
        backgroundColor: '#22d3ee',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [10, 20, 34, 44, 52, 51, 65, 43, 48, 60, 88, 100,],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)
