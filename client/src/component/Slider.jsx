import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";




const Slider = () => {
	const [portfolio, setPortfolio] = useState(null);
	const [whatever, setWhatEver] = useState({});
	Chart.register(...registerables);

	const data = {
		labels: [
			"Nigeria stocks",
			"Foreign stocks",
			"Tech stocks",
			"Emerging stocks",
			"Nigerian bonds",
			"Foreign Bonds",
			"Commodities",
			"Real Estate",
			"T bills",
			"Alternatives",
		],
		datasets: [
			{
				label: "Stocks",
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
				borderWidth: 2,
				hoverBackgroundColor: "rgba(75,192,192,0.4)",
				hoverBorderColor: "rgba(75,192,192,1)",
				data: [10 , 30, 4 , 50 , 16, 16 , 65, 13 , 50 ],
			},
		],
	};

	const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
	}
};


	useEffect(() => {
		const fetchData = async () => {
			// remember you changed the port here
			const response = await fetch("http://localhost:5000/risk-data");
			const result = await response.json();
			setPortfolio(result);
		};
		fetchData();
	}, []);
	const handleChange = (event) => {
		const currentInvestment = portfolio.find((investment) => {
			console.log(investment.risk_score);
			return investment.risk_score == event.target.value;
		});
		console.log(currentInvestment);
		setWhatEver(currentInvestment);
	};
	return (
		<>
			{portfolio && (
				<div className="w-[50vw] border rounded-md">
					<div className="flex justify-between items-center">
						<span>{whatever.risk_score}</span> <p>Example Portflio</p>
					</div>

					<input
						type="range"
						name=""
						id=""
						defaultValue={0}
						min={0}
						max={10}
						onChange={handleChange}
					/>

					<Bar
						className=""
						data={data}
						//width={"25vw"}
						options={options}
					/>
				</div>
			)}
		</>
	);
}

export default Slider;