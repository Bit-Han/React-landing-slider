import  { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";



const Chartjs = () => {
  const [chartDataLoading, setChartDataLoading] = useState(true); // Introduce chart data loading state
  const [chartData, setChartData] = useState(null);
  const [riskScores, setRiskScores] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [fetchedData, setFetchedData] = useState([]);
  const [otherColumns, setOtherColumns] = useState([]);
  const [zeroPercentageColumns, setZeroPercentageColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://riskapi.onrender.com");
        const data = await response.json();

        setFetchedData(data); // Set the fetched data

        const uniqueRiskScores = [
          ...new Set(data.map((item) => item.risk_score)),
        ];
        setRiskScores(uniqueRiskScores);

        // Update otherColumns to include all columns except "risk_score" and "_id"
        setOtherColumns(
          Object.keys(data[0]).filter(
            (key) => key !== "risk_score" && key !== "_id"
          )
        );
        setChartDataLoading(false); // Set chart data loading state to false after data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const setInitialChartData = () => {
    if (otherColumns.length > 0 && fetchedData.length > 0) {
      const initialRiskScoreData = fetchedData.find(
        (item) => item.risk_score === 0
      );
      if (initialRiskScoreData) {
        const zeroPercentColumns = otherColumns.filter(
          (col) => parseFloat(initialRiskScoreData[col].replace("%", "")) === 0
        );
        setZeroPercentageColumns(zeroPercentColumns);

        const colors = [
          "rgba(71, 67, 201, 1)",
          "rgba(118, 181, 255, 1)",
          "rgba(45, 52, 120, 1)",
        ]; // Define different colors with strong opacity
        const nonZeroColumnsData = otherColumns
          .filter(
            (col) =>
              parseFloat(initialRiskScoreData[col].replace("%", "")) !== 0
          )
          .map((col) => parseFloat(initialRiskScoreData[col].replace("%", "")));

        const nonZeroColumnsLabels = otherColumns.filter(
          (col) => parseFloat(initialRiskScoreData[col].replace("%", "")) !== 0
        );

        const initialChartData = {
          label: "",
          data: nonZeroColumnsData, // Use non-zero percentage data
          backgroundColor: colors.slice(0, nonZeroColumnsData.length), // Use different colors for each non-zero column
        };
        setChartData({
          labels: nonZeroColumnsLabels, // Remove percentage symbol from labels
          datasets: [initialChartData],
        });
      }
    }
  };

  useEffect(() => {
    setInitialChartData();
  }, [otherColumns, fetchedData]); // Include otherColumns and fetchedData as dependencies

  // ... previous code
  const handleSliderChange = (event) => {
    const selectedRiskScore = parseInt(event.target.value);
    setSliderValue(selectedRiskScore);

    const selectedIndex = riskScores.indexOf(selectedRiskScore);
    if (selectedIndex !== -1) {
      const selectedData = fetchedData.find(
        (item) => item.risk_score === selectedRiskScore
      );
      if (selectedData) {
        const zeroPercentColumns = otherColumns.filter(
          (col) => parseFloat(selectedData[col].replace("%", "")) === 0
        );
        setZeroPercentageColumns(zeroPercentColumns);
        const colors = [
          "rgba(71, 67, 201, 1)",
          "rgba(118, 181, 255, 1)",
          "rgba(45, 52, 120, 1)",
        ];
        const barData = {
          label: "",
          data: otherColumns
            .filter(
              (col) => parseFloat(selectedData[col].replace("%", "")) !== 0
            ) // Filter out columns with zero value
            .map((col) => parseFloat(selectedData[col].replace("%", ""))), // Remove the percentage symbol
          backgroundColor: colors.slice(0, otherColumns.length), // Use different shades of blue and indigo with strong opacity
          borderWidth: 0, // Remove the border on the bars
        };
        setChartData({
          labels: otherColumns.filter(
            (col) => parseFloat(selectedData[col].replace("%", "")) !== 0
          ),
          datasets: [barData],
        });
      }
    }
  };

  // ... rest of the code

  const chartOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 0, // Remove the border on the bars
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw + "%"; // Show the percentage of each bar
            return label;
          },
        },
      },
    },
    animation: {
      duration: 0, // Remove animation
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, ) {
            if (value === 0) {
              return otherColumns[index];
            } else {
              return otherColumns[index];
            }
          },
        },
      },
    },
  };


  return (
    <section className="wow fadeInUp relative -mt-[-10px]">
      <div className="mx-auto border border-indigo-200 rounded-xl p-4 text-center flex flex-col space-y-2 hover:border-gray-200 hover:border-opacity-50 hover:shadow-xl mb-4 w-3/5">
        <h2 className="text-lg">
          Risk Score: <span className="text-gray-600">{sliderValue}</span>
        </h2>
        <input
          type="range"
          min={riskScores.length > 0 ? riskScores[0] : 0}
          max={riskScores.length > 0 ? riskScores[riskScores.length - 1] : 100}
          value={sliderValue}
          onChange={handleSliderChange}
          className="bg-white"
          style={{ background: "white", color: "white" }} // Set the background color to white
        />
      </div>
      {chartDataLoading ? (
        <div className="mx-auto item-center justify-center text-center">Loading...</div>
      ) : (
        <div>
          <div className=" border border-indigo-200 grid grid-cols-2 md:grid-cols-4 gap-4  rounded-xl mb-2 p-4">
            {chartData && <Bar data={chartData} options={chartOptions} />}
          </div>
          <div
            className="flex"
            style={{ fontSize: "0.8em", color: "#999", gap: "10px" }}
          >
            {zeroPercentageColumns.map((column, index) => (
              <div key={index}>
                {column.charAt(0).toUpperCase() +
                  column.slice(1).replace(/_/g, " ")}
                : <span style={{ fontSize: "0.8em", color: "#999" }}>0%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Chartjs;
