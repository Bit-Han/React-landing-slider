import {Bar} from "react-chartjs-2";



// eslint-disable-next-line react/prop-types
const CustomChart = ({data}) => {
    const chartData = {
        // eslint-disable-next-line react/prop-types
        labels: data.map((assets) => assets.name),
        datasets: [
            {
                label: "Assets",
                // eslint-disable-next-line react/prop-types
                data: data.map((assets) => assets.value),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

const chartOptions = {
    indexAxis: 'y', // displays a horizontal bar chart
    scales: {
        x: {
            beginAtZero: true,
            max: 100,
        },

        y: {
            beginAtZero: true,
        }
    }
}
  return (
    <div className="w-1/2 m-8 aut0">
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

export default CustomChart;