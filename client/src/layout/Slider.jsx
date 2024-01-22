import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2'
import { Chart, registerables} from 'chart.js';




const Slider = () => {
	const [portfolio, setPortfolio] = useState(null);
	const [whatever, setWhatEver] = useState({});
	Chart.register(...registerables);

	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October'],
		datasets: [
			{
				label: 'Monthly Sales',
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(75,192,192,0.4)',
				hoverBorderColor: 'rgba(75,192,192,1)',
				data: [65, 59, 80, 81, 56, 55, 40],
			},
		],
	};

	useEffect(() => {
		const fetchData = async () => {
			// remember you changed the port here
			const response = await fetch("http://localhost:5001/risk-data");
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
			{portfolio && <div  className="w-[50vw]">
				<input
					type="range"
					name=""
					id=""
					defaultValue={0}
					min={0}
					max={10}
					onChange={handleChange}
				/>
				<div>{whatever.nigerian_stocks}</div>
				<Bar
					data={data}
					width={'50vw'}
					options={{
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					}}
				/>
			</div>}
		</>
	);
};

export default Slider;



// eslint-disable-next-line react/prop-types
// const Slider = ({ value, onChange}) => {
//   return (
// 		<div className="flex items-center mt-6">
// 			<label className="mr-4 text-lg">Select your investment level:</label>
// 			<input
// 				type="range"
// 				min="0"
// 				max="10"
// 				value={value}
// 				onChange={(e) => onChange(e.target.value)}
// 				className="w-1/2"
// 			/>
// 			<span className="ml-4">{value}</span>
// 		</div>
// 	);
// }

// export default Slider;